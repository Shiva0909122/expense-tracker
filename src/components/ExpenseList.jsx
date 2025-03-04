import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExpenses = expenses.filter(expense =>
    expense.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.date.includes(searchQuery)
  );

  return (
    <div className="expense-list">
      <h2>💰 Expense List</h2>
      <input
        type="text"
        placeholder="🔍 Search by title, category, or date..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {filteredExpenses.length === 0 ? (
        <p className="no-expenses">❌ No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDeleteExpense} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
