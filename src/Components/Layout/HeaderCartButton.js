import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import CartContext from "../store/cart-ctx";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const [visible, setVisible] = useState(false);
  const clickEventHandler = () => {
    setVisible(null);
  };
  const visibleHandler = () => {
    setVisible(true);
  };

  const { items } = cartCtx; //이런 식으로 특정 요소만 가져올수도 있다.

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      {visible && <Cart onClick={clickEventHandler}></Cart>}
      <button className={btnClasses} onClick={visibleHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        {/*아이콘을 감쌈*/}
        <span>{props.children}</span> {/*텍스트를 감쌈*/}
        <span className={classes.badge}>{numberOfCartItems}</span>{" "}
        {/*배지를 감쌈*/}
      </button>
    </>
  );
};

export default HeaderCartButton;
