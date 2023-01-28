import React from "react";
import AddUsers from "./Components/Users/AddUsers";
import { useState } from "react";
import UsersList from "./Components/Users/UsersList";

function App() {
  const userContainer = [];
  const [users, setUsers] = useState(userContainer);

  const addUsersHandler = (enteredUsers) => {
    setUsers((prevData) => {
      return [...prevData, enteredUsers];
    });
    console.log(users);
  };

  // const addUsersHandler = (uName, uAge) => {
  //   setUsers((prevData) => {
  //     return [...prevData, { username: uName, userage: uAge }];
  //   });
  // };
  return (
    <div>
      <AddUsers onAddUsers={addUsersHandler} />
      {users.length !== 0 && <UsersList users={users}></UsersList>}
    </div>
  );
}

export default App;
