import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function MonthlyStatement({ expenses }) {
  // Group expenses by month
  const monthlyData = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
    const existingMonth = acc.find((item) => item.month === month);
    if (existingMonth) {
      existingMonth.amount += expense.amount;
    } else {
      acc.push({ month, amount: expense.amount });
    }
    return acc;
  }, []);

  return (
    <div className="monthly-statement">
      <h2>📊 Monthly Expense Summary</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis />
            <Tooltip cursor={{ fill: 'rgba(136, 132, 216, 0.2)' }} />
            <Legend />
            <Bar dataKey="amount" fill="#4CAF50" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyStatement;
