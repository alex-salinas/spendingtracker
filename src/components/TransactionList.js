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
          <tr key={t._id || t.id}>
            <td>{t.date}</td>
            <td>{t.type}</td>
            <td>{t.category}</td>
            <td className={t.type === "income" ? "income" : "expense"}>
              {t.type === "income" ? "+" : "-"}
              {Math.abs(t.amount)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
