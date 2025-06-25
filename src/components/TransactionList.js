import React from "https://esm.sh/react@18";

export default function TransactionList({ transactions }) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.type}</td>
            <td>{t.category}</td>
            <td>{t.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
