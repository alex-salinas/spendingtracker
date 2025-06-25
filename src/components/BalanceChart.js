import React, { useEffect, useRef } from "https://esm.sh/react@18";
import Highcharts from "https://esm.sh/highcharts";

export default function BalanceChart({ transactions }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const dailyTotals = transactions.reduce((acc, t) => {
      const day = t.date;
      acc[day] = acc[day] || 0;
      acc[day] += t.type === "income" ? t.amount : -t.amount;
      return acc;
    }, {});
    const categories = Object.keys(dailyTotals).sort();
    const data = categories.map((c) => dailyTotals[c]);

    Highcharts.chart(chartRef.current, {
      title: { text: "Daily Balance" },
      xAxis: { categories },
      series: [{ name: "Balance", data }],
    });
  }, [transactions]);

  return <div ref={chartRef}></div>;
}
