// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const PriceHistoryGraph = ({ data }) => {
//   return (
//     <LineChart width={600} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="date" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="price" stroke="#CF0A2C" activeDot={{ r: 8 }} />
//     </LineChart>
//   );
// };

// export default PriceHistoryGraph;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const PriceHistoryGraph = ({ data }) => {
//   return (
//     <LineChart width={600} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottom', offset: -4 }} />
//       {/* Add X-axis label with value, position, and offset */}
//       <YAxis label={{ value: 'Price in USD', angle: -90, position: 'insideLeft' }} />
//       {/* Add Y-axis label with value, angle, and position */}
//       <Tooltip />
//       {/* <Legend /> */}
//       <Line type="monotone" dataKey="price" stroke="#CF0A2C" activeDot={{ r: 8 }} />
//     </LineChart>
//   );
// };

// export default PriceHistoryGraph;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PriceHistoryGraph = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        label={{
          value: 'Date',
          position: 'insideBottom',
          offset: -4, // Adjust the offset to increase the distance from the axis
          style: { fontSize: '14px', fontWeight: 'bold', fill: '#333' } // Add styles for the label
        }}
      />
      <YAxis label={{ value: 'Price in USD', angle: -90, position: 'insideLeft' , style: { fontSize: '14px', fontWeight: 'bold', fill: '#333' } }}  />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#CF0A2C" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default PriceHistoryGraph;

