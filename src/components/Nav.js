import React, { useEffect, useState } from "react";

export default function Nav() {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("key")) || []
  );

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    return setAllUsers(() => {
      return users;
    });
  }, []);

  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < 10; i++) {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          newArr.push(data);
          setUsers(localStorage.setItem("key", JSON.stringify(newArr)));
        });
    }

    return localStorage.clear();
  }, []);

  return (
    <div className="table-responsive-md">
      <table className="table table-bordered table-hover table-striped table-info">
        <thead>
          <tr className="tr">
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={item.results[0].picture.thumbnail} alt="" />
                </td>
                <td>{item.results[0].name.first}</td>
                <td>{item.results[0].name.last}</td>
                <td>{item.results[0].location.city}</td>
                <td>{item.results[0].email}</td>
                <td>{item.results[0].phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
