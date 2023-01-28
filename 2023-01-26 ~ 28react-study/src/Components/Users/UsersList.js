// import classes from "./UsersList.module.css";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((usersData) => (
          <li key={usersData.id}>
            {usersData.username} ({usersData.userage} 살)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
