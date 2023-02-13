import { useState } from "react";
import CartContext from "./cart-ctx";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalAmount, setCartTotalAmounts] = useState(0);
  const addItemHandler = (item) => {
    setCartItems((prevData) => {
      return [...prevData, item];
    });
    setCartTotalAmounts((prevAmount) => {
      return prevAmount + item.price * item.amount;
    });
  };
  const removeItemHandler = (id) => {
    setCartItems((prevData) =>
      prevData.forEach((item, index) => {
        if (item.id === id) {
          prevData.splice(index, 1);
        }
      })
    );
    setCartTotalAmounts(0);
  };
  const cartContext = {
    items: cartItems,
    totalAmount: cartTotalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
