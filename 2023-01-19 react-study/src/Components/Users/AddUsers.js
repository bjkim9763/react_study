import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import { useState } from "react";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserage, enteredUsername);

    setEnteredUserage("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="Username">Username</label>
        <input
          id="Username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="Age">Age (Years)</label>
        <input
          id="Age"
          min="1"
          type="number"
          value={enteredUserage}
          onChange={userageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
