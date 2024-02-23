import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value1: 10, value2: 15 },
  { name: 'Feb', value1: 20, value2: 25 },
  { name: 'Mar', value1: 15, value2: 18 },
  { name: 'Apr', value1: 25, value2: 30 },
  { name: 'May', value1: 18, value2: 22 },
];

const DoubleLineChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" name="Line 1" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" name="Line 2" />
    </LineChart>
  );
};

export default DoubleLineChart;
