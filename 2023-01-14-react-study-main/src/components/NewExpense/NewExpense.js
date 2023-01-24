import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [style, setStyle] = useState({ display: "block" });
  const clickHandler = () => {
    setStyle({ display: "none" });
  };
  const cancelDataHandler = (data) => {
    const cancel = data;

    cancel.includes("Cancel") && setStyle({ display: "block" });
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setStyle({ display: "block" });
  };
  return (
    <div className="new-expense">
      <button onClick={clickHandler} style={style}>
        Add New Expense
      </button>
      {style.display === "none" && (
        <ExpenseForm
          onCancelData={cancelDataHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
