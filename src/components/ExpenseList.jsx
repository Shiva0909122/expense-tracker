import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses found.</p>;
  }

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDeleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;