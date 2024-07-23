import "./index.css";

import React from "react";
import "./index.css";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const BarChartComponent = () => {
  const data = [
    { name: "June 1-7", value: 50000 },
    { name: "June7-14", value: 40000 },
    { name: "June 14-28", value: 100000 },
    { name: "June 28-30 ", value:20000 },
    { name: "March 1-7 ", value: 200000},
    { name: "March 7-14", value: 15600 },
    { name: "March 14-28", value: 65000 },
    { name: "March 28-31", value: 78000 },
    { name: "April 1-7", value: 60000 },
    { name: "April 8-14", value: 150000},
    { name: "April 14-28", value: 16000 },
    { name: "April 28-30", value: 220000 },
  ];
  const COLORS = ["#302EA8"];
  return (
    <div className="bar">
      <h1>Statistics</h1>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={COLORS[0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarChartComponent;
