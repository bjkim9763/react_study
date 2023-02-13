import { useContext } from "react";
import CartContext from "../../store/cart-ctx";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
        {/* 이렇게 넣어줘야 각 리스트에 반복문으로 추가됨 */}
      </div>
    </li>
  );
};
export default MealItem;
