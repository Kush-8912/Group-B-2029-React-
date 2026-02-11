import React, { useEffect, useState } from "react";

function UserComponent() {

  const [users , setUsers] =  useState([])

  useEffect(() => {
    console.log("Runs only on the first Render");
    const fetchData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const userData = await data.json();

      setUsers(userData)

      console.log(users)

     };

    fetchData();
  }, []);

  return <div>
    <ul>
   {users.map((user)=>(
    <li>{user.name}</li>
   ))}
   </ul>

  </div>;
}

export default UserComponent;
