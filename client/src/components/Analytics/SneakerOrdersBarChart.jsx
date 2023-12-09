import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const SneakerOrdersRadialBarChart = ({ data }) => {
  return (
    <RadialBarChart width={400} height={300} innerRadius="20%" outerRadius="80%" data={data}>
      <RadialBar dataKey="orders" fill="#8884d8" minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} />
      <Tooltip />
      <Legend />
    </RadialBarChart>
  );
};

export default SneakerOrdersRadialBarChart;