import React, { useState } from 'react';

const ExpenseCalculator = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState(0);

  const addExpense = () => {
    setExpenses([...expenses, Number(amount)]);
    setAmount(0);
  };

  const total = expenses.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={addExpense}>Add Expense</button>
      <h3>Total: {total}</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseCalculator;
