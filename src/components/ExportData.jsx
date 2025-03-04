import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ExportData({ expenses }) {
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "User");

  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  // 📌 Export to CSV
  const exportToCSV = () => {
    const csvData = [
      ["User Name:", userName], // Add username at the top
      [],
      ["Title", "Amount ($)", "Date", "Category"], // Headers
      ...expenses.map((expense) => [expense.title, expense.amount, expense.date, expense.category]),
    ];

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `Expense_Report_${userName}.csv`);
  };

  // 📌 Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(`Expense Report - ${userName}`, 14, 15);

    const tableData = expenses.map((expense) => [
      expense.title,
      `$${expense.amount.toFixed(2)}`,
      expense.date,
      expense.category,
    ]);

    doc.autoTable({
      head: [["Title", "Amount", "Date", "Category"]],
      body: tableData,
      startY: 25,
      theme: "striped",
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [44, 62, 80] },
    });

    doc.save(`Expense_Report_${userName}.pdf`);
  };

  return (
    <div className="export-data">
      <h2>📤 Export Your Data</h2>
      <p className="username">👤 Logged in as <strong>{userName}</strong></p>

      <div className="export-buttons">
        <button className="btn btn-csv" onClick={exportToCSV}>
          📄 Export to CSV
        </button>
        <button className="btn btn-pdf" onClick={exportToPDF}>
          📕 Export to PDF
        </button>
      </div>
    </div>
  );
}

export default ExportData;
