import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useState } from "react";

import Cart from "../Cart/Cart";
import CartProvider from "../store/CartProvider";
import CartContext from "../store/cart-ctx";
const HeaderCartButton = (props) => {
  const cardCtx = useContext(CartContext);
  const [visible, setVisivle] = useState(false);
  const clickEventHandler = () => {
    setVisivle(null);
    console.log(visible);
  };
  const visibleHandler = () => {
    setVisivle(true);
  };
  return (
    <>
      {visible && <Cart onClick={clickEventHandler}></Cart>}
      <button className={classes.button} onClick={visibleHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        {/*아이콘을 감쌈*/}
        <span>{props.children}</span> {/*텍스트를 감쌈*/}
        <span className={classes.badge}>3</span> {/*배지를 감쌈*/}
      </button>
    </>
  );
};

export default HeaderCartButton;
