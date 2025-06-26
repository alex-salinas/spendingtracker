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
    let running = 0;
    const data = categories.map((c) => {
      running += dailyTotals[c];
      return running;
    });

    Highcharts.chart(chartRef.current, {
      title: { text: "Balance Over Time" },
      xAxis: { categories },
      yAxis: { title: { text: "Balance" } },
      series: [{ name: "Balance", data }],
    });
  }, [transactions]);

  return <div ref={chartRef} className="chart-container"></div>;
}
