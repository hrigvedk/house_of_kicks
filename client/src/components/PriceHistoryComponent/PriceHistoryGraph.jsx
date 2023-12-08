import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import { priceHistory } from './PriceHistoryData';

const PriceHistoryGraph = () => {

    const data = [
        {
          date: '2023-12-07',
          price: 180,
        },
        {
          date: '2023-12-09',
          price: 200,
        },
        {
          date: '2023-12-11',
          price: 170,
        },
        {
            date: '2023-12-13',
            price: 160,
          },
          {
            date: '2023-12-15',
            price: 190,
          },    {
            date: '2023-12-17',
            price: 230,
          },
          {
            date: '2023-12-19',
            price: 150,
          },
          {
            date: '2023-12-21',
            price: 250,
          },
        // Add more data as needed
      ];
  const chartContainer = useRef(null);

  useEffect(() => {
    if (data.length > 0 && chartContainer.current) {
      const dates = data.map((item) => item.date);
      const prices = data.map((item) => item.price);

      const ctx = chartContainer.current.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Price History',
            data: prices,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          }],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',
              time: {
                parser: 'YYYY-MM-DD', // Specify your date format here
                unit: 'day',
                displayFormats: {
                  day: 'MMM DD',
                },
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Price',
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartContainer} />;
};

export default PriceHistoryGraph;
