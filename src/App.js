import React, { useState } from "https://esm.sh/react@18";
import TransactionForm from "./components/TransactionForm.js";
import TransactionList from "./components/TransactionList.js";
import BalanceChart from "./components/BalanceChart.js";

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (txn) => {
    setTransactions([...transactions, { ...txn, id: Date.now() }]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Spending Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
      <BalanceChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}
