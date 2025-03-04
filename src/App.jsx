import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import MonthlyStatement from './components/MonthlyStatement';
import ExportData from './components/ExportData';
import './App.css';
import UserNameForm from './components/UserNameForm';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || "User";
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app">
      <header>
        {/* <h1>Expense Tracker</h1> */}
        <UserNameForm setUserName={setUserName} />
        <p>Welcome, <strong>{userName}</strong>! 👋</p>
      </header>
      <main>
        <div className="container">
          <div className="left-panel">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <MonthlyStatement expenses={expenses} />
            <ExportData expenses={expenses} />
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
