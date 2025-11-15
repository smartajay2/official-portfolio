import { MoveRight } from 'lucide-react';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Original ranges
const ranges = [
  { startYear: 2004, endYear: 2010, growth: 80, label: "Education" },
  { startYear: 2004, endYear: 2010, growth: 40, label: "Sports" },
  { startYear: 2004, endYear: 2010, growth: 100, label: "Wealth"},
  { startYear: 2004, endYear: 2010, growth: 90, label: "Health"},

  { startYear: 2011, endYear: 2021, growth: 40, label: "Education"},
  { startYear: 2011, endYear: 2021, growth: 90, label: "Sports"},
  { startYear: 2011, endYear: 2021, growth: 10, label: "Wealth"},
  { startYear: 2011, endYear: 2021, growth: 60, label: "Health"},

  { startYear: 2022, endYear: 2024, growth: 90, label: "Education" },
  { startYear: 2022, endYear: 2024, growth: 60, label: "Sports" },
  { startYear: 2022, endYear: 2024, growth: 20, label: "Wealth" },
  { startYear: 2022, endYear: 2024, growth: 80, label: "Health" },

  { startYear: 2025, endYear: 2026, growth: 90, label: "Education" },
  { startYear: 2025, endYear: 2026, growth: 50, label: "Sports" },
  { startYear: 2025, endYear: 2026, growth: 45, label: "Wealth" },
  { startYear: 2025, endYear: 2026, growth: 80, label: "Health" },
];

// Expand ranges into yearly data
const yearlyDataMap = {};

ranges.forEach(item => {
  for (let year = item.startYear; year <= item.endYear; year++) {
    if (!yearlyDataMap[year]) yearlyDataMap[year] = { year };
    yearlyDataMap[year][item.label] = item.growth;
  }
});

// Convert object to array
const data = Object.values(yearlyDataMap);

export default function LifeGrowthGraph() {
  return (
    <div className="mt-1">
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          
          <XAxis 
            dataKey="year" 
            tick={{ fontSize: 12 }} 
            interval="preserveStartEnd" 
            angle={-30} 
            textAnchor="end" 
          />

          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />

          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          {/* Education */}
          <Line type="monotone" dataKey="Education" stroke="#8884d8" strokeWidth={3} />

          {/* Sports */}
          <Line type="monotone" dataKey="Sports" stroke="#82ca9d" strokeWidth={3} />

          {/* Wealth */}
          <Line type="monotone" dataKey="Wealth" stroke="#f97316" strokeWidth={3} />

          {/* Health */}
          <Line type="monotone" dataKey="Health" stroke="#ef4444" strokeWidth={3} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
