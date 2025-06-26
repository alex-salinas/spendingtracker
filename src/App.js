import React, { useState, useEffect } from "https://esm.sh/react@18";
import TransactionForm from "./components/TransactionForm.js";
import TransactionList from "./components/TransactionList.js";
import BalanceChart from "./components/BalanceChart.js";

export default function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  const addTransaction = (txn) => {
    fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(txn),
    })
      .then((res) => res.json())
      .then((saved) => setTransactions([...transactions, saved]))
      .catch((err) => console.error(err));
  };

  const balance = transactions.reduce(
    (sum, t) => sum + (t.type === "income" ? t.amount : -t.amount),
    0
  );

  return (
    <div>
      <h1>Spending Tracker</h1>
      <h2>Balance: {balance}</h2>
      <TransactionForm onAdd={addTransaction} />
      <BalanceChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}
