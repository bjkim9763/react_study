import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../Filter/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredDataHandler = (enteredData) => {
    setFilteredYear(enteredData);
  };

  const expenseItemContainer = (expenses) => {
    return expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  };
  const filteredItems = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilteredData={filteredDataHandler}
      />
      <ExpensesChart expenses={filteredItems} />

      {filteredItems.length === 0 ? (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      ) : (
        expenseItemContainer(filteredItems)
      )}

      {/* {filteredItems.length === 0 && <p>No expense found.</p>} */}

      {/* {(() => {
        if (filteredItems.length === 0) return <p>No expense found.</p>;
        if (filteredItems.length !== 0)
          return expenseItemContainer(filteredItems);
      })()} */}
    </Card>
  );
};
export default Expenses;
