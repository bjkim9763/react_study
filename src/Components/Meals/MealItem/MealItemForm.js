import { useState } from "react";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const modalDataContainer = [
    {
      id: "m1",
      name: props.name,
      amount: 1,
    },
  ];
  const [visible, setVisivle] = useState(false);
  const [modalData, setModalData] = useState(modalDataContainer);
  const inputDataHandler = (enteredData) => {
    const countData = enteredData;
    const data = {
      id: "count_" + props.id,
      name: props.name,
      amount: Number(countData),
    };
    setModalData((prevData) => {
      return [data];
    });
  };
  const clickEventHandler = () => {
    setVisivle(null);
    console.log(visible);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setVisivle(true);
  };
  return (
    <>
      {visible && (
        <Modal clickEvent={clickEventHandler} modalData={modalData} />
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          inputData={inputDataHandler}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />

        <button type="submit">+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
