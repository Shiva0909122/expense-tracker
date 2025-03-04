import { useState } from 'react';
import { formatDate } from '../utils/dateUtils';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(formatDate(new Date()));
  const [category, setCategory] = useState('other');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const expenseData = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category
    };

    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate(formatDate(new Date()));
    setCategory('other');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add New Expense</h2>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount ($)</label>
        <input
          type="number"
          id="amount"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
         <option value="food">🍽️ Food</option>
          <option value="transportation">🚗 Transportation</option>
          <option value="utilities">💡 Utilities</option>
          <option value="entertainment">🎭 Entertainment</option>
          <option value="housing">🏠 Housing</option>
          <option value="healthcare">⚕️ Healthcare</option>
          <option value="education">📚 Education</option>
          <option value="shopping">🛍️ Shopping</option>
          <option value="travel">✈️ Travel</option>
          <option value="subscriptions">📺 Subscriptions</option>
          <option value="gifts">🎁 Gifts</option>
          <option value="insurance">🛡️ Insurance</option>
          <option value="investments">📈 Investments</option>
          <option value="charity">❤️ Charity</option>
          <option value="miscellaneous">🔹 Miscellaneous</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;