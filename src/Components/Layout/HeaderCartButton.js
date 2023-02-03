import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/*아이콘을 감쌈*/}
      <span>{props.children}</span> {/*텍스트를 감쌈*/}
      <span className={classes.badge}>3</span> {/*배지를 감쌈*/}
    </button>
  );
};

export default HeaderCartButton;
