import classes from "./Input.module.css";
const Input = (props) => {
  const changHandler = (event) => {
    props.inputData(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={changHandler} />
    </div>
  );
};
export default Input;
