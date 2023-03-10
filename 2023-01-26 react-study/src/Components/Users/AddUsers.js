import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [error, setError] = useState();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserage.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      setError({
        title: "유효하지 않은 입력",
        message: "유효한 이름과 나이를 입력해주세요! (빈 칸은 안됩니다!!)",
      });

      return;
    }
    if (+enteredUserage < 1) {
      setError({
        title: "유효하지 않은 나이",
        message: "유효한 나이를 입력해주세요! (최소 1살이어야 합니다!!)",
      });
      return;
    }
    console.log(enteredUserage, enteredUsername);

    const enteredData = {
      username: enteredUsername,
      userage: enteredUserage,
      id: Math.random(),
    };
    props.onAddUsers(enteredData);

    setEnteredUserage("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          clickEvent={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      {/*이때 error의 값을 undefined나 null값으로 바꿔줌으로써 지울 수 있다. */}

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
            // min="1"
            type="number"
            value={enteredUserage}
            onChange={userageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
