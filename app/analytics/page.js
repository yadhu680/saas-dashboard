'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 700 },
  { name: 'Mar', users: 900 },
  { name: 'Apr', users: 600 },
  { name: 'May', users: 1100 },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">User Growth Analytics</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
