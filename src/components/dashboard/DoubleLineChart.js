import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value1: 10, value2: 15 },
  { name: 'Feb', value1: 20, value2: 25 },
  { name: 'Mar', value1: 15, value2: 18 },
  { name: 'Apr', value1: 25, value2: 30 },
  { name: 'May', value1: 18, value2: 22 },
  { name: 'Jun', value1: 50, value2: 20 },
  { name: 'Jul', value1: 42, value2: 30 },
  { name: 'Aug', value1: 31, value2: 56 },
  { name: 'Sep', value1: 65, value2: 35 },
  { name: 'Oct', value1: 15, value2: 25 },
  { name: 'Nov', value1: 35, value2: 65 },
  { name: 'Dec', value1: 51, value2: 45 },
];


const SimpleAreaChart = () => {
  return (
    <AreaChart width={950} height={390} data={data}>
      <CartesianGrid strokeDasharray="5 5" vertical={false} /> {/* Set vertical to false */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="value1" stroke="#419DF1" fill="#16324A" name="Profit" strokeWidth={4} />
      <Area type="monotone" dataKey="value2" stroke="#FF5555" fill="#16324A" name="Loss" strokeWidth={4} />

    </AreaChart>
  );
};

export default SimpleAreaChart;
