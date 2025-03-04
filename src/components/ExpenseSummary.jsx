import { useState } from "react";

function ExpenseSummary({ expenses }) {
  const [budgets, setBudgets] = useState({
    food: 200,
    transportation: 100,
    utilities: 150,
    entertainment: 100,
    other: 50,
  });

  const handleBudgetChange = (category, value) => {
    setBudgets((prev) => ({ ...prev, [category]: Number(value) }));
  };

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <BudgetTracker expenses={expenses} />
      {Object.keys(budgets).map((category) => (
        <div key={category} className="budget-item">
          <label>{category.toUpperCase()}</label>
          <input
            type="number"
            value={budgets[category]}
            onChange={(e) => handleBudgetChange(category, e.target.value)}
          />
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(categoryTotals[category] || 0) / budgets[category] * 100}%`,
                backgroundColor:
                  (categoryTotals[category] || 0) > budgets[category] ? "red" : "green",
              }}
            ></div>
          </div>
          <p>
            Spent: ${categoryTotals[category] || 0} / Budget: ${budgets[category]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ExpenseSummary;