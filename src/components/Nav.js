import React, { useEffect, useState } from "react";

export default function Nav() {
  const [users, setUsers] = useState({
    image: "",
    first: "",
    last: "",
    city: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          setUsers((prevState) => {
            return {
              ...prevState,
              image: data.results[0].picture.thumbnail,
              first: data.results[0].name.first,
              last: data.results[0].name.last,
              city: data.results[0].location.city,
              email: data.results[0].email,
              phone: data.results[0].phone,
            };
          });
        });
    }
  }, []);

  console.log(`first: ${users.first}`);
  console.log(`last: ${users.last}`);
  console.log(`city: ${users.city}`);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={users.image} alt="" />
            </td>
            <td>{users.first}</td>
            <td>{users.last}</td>
            <td>{users.city}</td>
            <td>{users.email}</td>
            <td>{users.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
