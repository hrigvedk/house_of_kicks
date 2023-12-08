import React from 'react';
import './Portfolio.css';

const portfolio = [
  {
    brand: "Nike",
    modelName: "Nike Vomero 5",
    gender: "Men",
    marketPrice: "$220.70",
    purchasePrice: "$205.70",
    purchaseDate: "10-23-2023",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 5,
    ankleType: "High",
    assets: {
      "img": ['https://drive.google.com/uc?id=1bsmhYvKM0MtGs0f3gIKFwy1dCZtUbdcE'],
      "vid": [],
      "mtl": []
    },
    description: "Lorem Ipsum Dolor Sit"
  },
];

const Portfolio = () => {
  return (
<div className='d-flex justify-content-center'>
    <div className='row portfolio-container'>
      <table className="table">
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Purchase Date</th>
            <th>Purchase Price</th>
            <th>Market Price</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((item, index) => (
            <tr key={index}>
              <td>{item.modelName}</td>
              <td>{item.purchaseDate}</td>
              <td>{item.purchasePrice}</td>
              <td>{item.marketPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Portfolio;
