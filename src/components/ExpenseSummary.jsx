function ExpenseSummary({ expenses }) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className="expense-summary">
      <h2>Summary</h2>
      <div className="total-expense">
        <h3>Total Expenses</h3>
        <span className="amount">${totalExpenses.toFixed(2)}</span>
      </div>
      <div className="category-breakdown">
        <h3>Category Breakdown</h3>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <div key={category} className="category-item">
            <span className="category">{category}</span>
            <span className="amount">${amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseSummary;