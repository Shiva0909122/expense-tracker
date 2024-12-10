import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <div className="container">
          <div className="left-panel">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseSummary expenses={expenses} />
          </div>
          <div className="right-panel">
            <ExpenseList 
              expenses={expenses} 
              onDeleteExpense={handleDeleteExpense} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;