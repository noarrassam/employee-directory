import React, { useEffect, useState } from "react";

export default function Nav() {
  const [users, setUsers] = useState({ first: "", last: "", city: "" });

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          setUsers((prevState) => {
            return {
              ...prevState,
              first: data.results[0].name.first,
              last: data.results[0].name.last,
              city: data.results[0].location.city,
            };
          });
        });
    }
  }, []);

  console.log(`first: ${users.first}`);
  console.log(`last: ${users.last}`);
  console.log(`city: ${users.city}`);
  return (
    <nav>
      <ul>
        <li>
          {users.name} {users.last} {users.city}
        </li>
      </ul>
    </nav>
  );
}
