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
  { startYear: 2004, endYear: 2010, growth: 100, label: "Wealth" },
  { startYear: 2004, endYear: 2010, growth: 90, label: "Health" },

  { startYear: 2011, endYear: 2021, growth: 40, label: "Education" },
  { startYear: 2011, endYear: 2021, growth: 90, label: "Sports" },
  { startYear: 2011, endYear: 2021, growth: 10, label: "Wealth" },
  { startYear: 2011, endYear: 2021, growth: 60, label: "Health" },

  { startYear: 2022, endYear: 2024, growth: 90, label: "Education" },
  { startYear: 2022, endYear: 2024, growth: 60, label: "Sports" },
  { startYear: 2022, endYear: 2024, growth: 20, label: "Wealth" },
  { startYear: 2022, endYear: 2024, growth: 80, label: "Health" },

  { startYear: 2025, endYear: 2026, growth: 90, label: "Education" },
  { startYear: 2025, endYear: 2026, growth: 50, label: "Sports" },
  { startYear: 2025, endYear: 2026, growth: 45, label: "Wealth" },
  { startYear: 2025, endYear: 2026, growth: 80, label: "Health" },
];

// Build yearly data
const yearlyDataMap = {};
ranges.forEach(item => {
  for (let year = item.startYear; year <= item.endYear; year++) {
    if (!yearlyDataMap[year]) yearlyDataMap[year] = { year };
    yearlyDataMap[year][item.label] = item.growth;
  }
});
const data = Object.values(yearlyDataMap);

export default function LifeGrowthGraph() {
  return (
    <div className="w-full flex justify-center mt-6 px-3 sm:px-6 md:px-10">
      <div className="w-full max-w-6xl bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-md">

        {/* Responsive Height */}
        <div className="w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[520px]">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, left: 5, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="year"
                tick={{ fontSize: 10 }}
                angle={-20}
                interval={0}
                textAnchor="end"
                tickFormatter={(year) => (year % 2 === 0 ? year : "")}
              />


              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 10 }}
              />

              <Tooltip
                contentStyle={{ fontSize: "12px" }}
                wrapperStyle={{ outline: "none" }}
              />

              <Legend
                verticalAlign="top"
                height={30}
                wrapperStyle={{ fontSize: "12px" }}
              />

              <Line dataKey="Education" stroke="#6366f1" strokeWidth={2} dot={false} />
              <Line dataKey="Sports" stroke="#22c55e" strokeWidth={2} dot={false} />
              <Line dataKey="Wealth" stroke="#f97316" strokeWidth={2} dot={false} />
              <Line dataKey="Health" stroke="#ef4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
}
