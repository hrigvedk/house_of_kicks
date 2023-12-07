import React from 'react';

const bestSellers = [
  {
    brand: "Nike",
    modelName: "Nike Vomero 5",
    gender: "Men",
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
  return (
    <div className='row mx-auto' style={{ width: '60%' }}>
      <div className='col-md-4'>
        <img
          src={bestSellers[0].assets.img[0]} // Using the first image from the array
          alt="Responsive"
          className="img-fluid float-right" // Added float-right class
          style={{ height: '150px' }} // Set the height to 200px
        />
      </div>
      <div className='col-md-8'>
        This is the bigger column. It is obviously the bigger column.
      </div>
    </div>
  );
}

export default Cart;
