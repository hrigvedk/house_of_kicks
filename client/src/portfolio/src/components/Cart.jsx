import React from 'react';
import './Cart.css';

const bestSellers = [
  {
    brand: "Nike",
    modelName: "Nike Vomero 5",
    gender: "Men",
    price: "$220.70",
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
  {
    brand: "Nike",
    modelName: "Nike Air Max 270",
    gender: "Men",
    price: "$168.90",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 5,
    ankleType: "High",
    assets: {
      "img": ['https://drive.google.com/uc?id=1DgyPmb02sukhXkI14YBLrYXo7AdK5eGa'],
      "vid": [],
      "mtl": []
    },
    description: "Lorem Ipsum Dolor Sit"
  },
  {
    brand: "Nike",
    modelName: "Nike Air Max 270",
    gender: "Men",
    price: "$168.90",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 5,
    ankleType: "High",
    assets: {
      "img": ['https://drive.google.com/uc?id=1DgyPmb02sukhXkI14YBLrYXo7AdK5eGa'],
      "vid": [],
      "mtl": []
    },
    description: "Lorem Ipsum Dolor Sit"
  },
];

const Cart = () => {

  const totalPrice = bestSellers.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <div className="d-flex justify-content-center">
      <div className='row cart-container'>
        <h4 className='cart-title'>Sneakers in your bag :</h4>
      {bestSellers.map((item, index) => (
        <div className='row'>
          <div className='col-md-6'>
            <h7>{item.modelName} - {item.price}</h7>
          </div>
          <div className='col-md-6'>
          <button type="button" className='delete-button'>Delete</button>
          </div>
        </div>
            ))}
            <h6 className='total-price'>Total : $ {totalPrice}</h6>
        <form>
        <h4 className='address-title'>Enter your address :</h4>
          <div className="row mb-3 cart-form-row">
            <div className="col">
              <label htmlFor="streetAddress1" className="form-label">Street Address 1</label>
              <input type="text" className="form-control" id="streetAddress1" />
            </div>
            <div className="col">
              <label htmlFor="streetAddress2" className="form-label">Street Address 2</label>
              <input type="text" className="form-control" id="streetAddress2" />
            </div>
          </div>
          <div className="row mb-3 cart-form-row">
            <div className="col">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="col">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" />
            </div>
          </div>
          <div className="row mb-3 cart-form-row">
            <div className="col">
              <label htmlFor="pinCode" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="pinCode" />
            </div>
          </div>
          <div className="row mb-3 cart-form-row">
            <div className="col">
              <button type="button" className='shop-now-button'>Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
