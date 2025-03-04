function ExpenseItem({ expense, onDelete }) {
  const { id, title, amount, date, category } = expense;

  return (
    <div className="expense-item">
      <div className="expense-item__info">
        <h3>{title}</h3>
        <div className="expense-item__details">
          <span className="date">📅 {date}</span>
          <span className="category">🏷️ {category}</span>
        </div>
      </div>
      <div className="expense-item__amount">
        <span className="amount">💲{amount.toFixed(2)}</span>
        <button onClick={() => onDelete(id)} className="delete-btn">🗑️ Delete</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
