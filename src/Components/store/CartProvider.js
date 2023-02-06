import CartContext from "./cart-ctx";

const CartProvider = (props) => {
  const addItemHandler = () => {};
  const removeItemHandler = () => {};
  const cartProvider = {
    items: cf,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
