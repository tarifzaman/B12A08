import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AppReviewChart = ({ ratings }) => {
  // ডেটা ফরম্যাট: ratings [ { name: "1 star", count: 150 }, ... ]
  // chartData array-কে উল্টে দিচ্ছি যাতে 5 star উপরে থাকে (Figma Design অনুযায়ী)
  const chartData = [...ratings].reverse();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">User Reviews Breakdown</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#6b7280" />
            <YAxis 
                dataKey="name" 
                type="category" 
                stroke="#6b7280" 
                width={70} // 4 star, 5 star লেখার জন্য জায়গা
            />
            <Tooltip 
                cursor={{ fill: 'rgba(131, 107, 230, 0.1)' }} // Violet overlay
                formatter={(value) => [`${value} votes`, 'Count']}
                labelStyle={{ fontWeight: 'bold' }}
            />
            {/* বার চার্টের কালার (Violet) */}
            <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppReviewChart;