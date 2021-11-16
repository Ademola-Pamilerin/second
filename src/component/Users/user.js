import classes from "./user.module.css";
import Card from '../UI/card/card'
const User = (props) => {
  return (
      <Card className={classes.users}>
    <ul>
      {props.users.map((users,index) => (
        <li key={index}>{users.name} {users.age} years old</li>
      ))}
    </ul>
    </Card>
  );
};
export default User;
