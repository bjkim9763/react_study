import React from "react";
import AddUsers from "./Components/Users/AddUsers";
import { useState } from "react";

function App() {
  const userContainer = [];
  const [users, setUsers] = useState(userContainer);

  const addUsersHandler = (enteredUsers) => {
    setUsers((prevData) => {
      return [enteredUsers, ...prevData];
    });
  };
  return (
    <div>
      <AddUsers onAddUsers={addUsersHandler} />
    </div>
  );
}

export default App;
