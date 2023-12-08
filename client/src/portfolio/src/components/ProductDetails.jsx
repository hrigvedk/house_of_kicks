// components/ProductDetails.jsx
import React from 'react';
import './ProductDetails.css';
import Rating from 'react-rating-stars-component';

const ProductDetails = ({ shoe }) => {
  // Use the shoe prop instead of shoesData array
  if (!shoe) {
    return <div>Shoe not found</div>;
  }

  const renderImages = () => {
    // Start from the 1st element and show only 4 images
    return shoe.assets.img.slice(1, 5).map((image, index) => (
      <div key={index} className="col-md-6 shoe-img-container">
        <img src={image} alt={`${shoe.modelName} - ${index + 1}`} className="shoe-img img-fluid" />
      </div>
    ));
  };

  const renderShoeSizes = () => {
    const shoeSizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14];

    return (
      <div className="row mt-3 shoe-sizes-container">
        {shoeSizes.map((size, index) => {
          const isAvailable = !shoe.availableSizes.includes(size);
          console.log(isAvailable);

          return (
            <div key={index} className={`col-md-4 shoe-size-box-container`}>
              <div className={`shoe-size-box ${isAvailable ? 'sold-out' : ''}`}>
                {size}
              </div>
            </div>
          );
        })}
      </div>

    );
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <div className="row">
          {renderImages()}
        </div>
      </div>
      <div className="col-md-5 shoe-details">
        <span>{`${shoe.gender}'s Shoes`}</span>
        <h4>{shoe.modelName}</h4>
        <span className='shoe-price'>{shoe.price}</span>
        <Rating
          count={5}
          value={shoe.rating}
          size={24}
          edit={false}
          isHalf={true}
          activeColor="#cd0606"
        />
        {renderShoeSizes()}
        <div className="mt-3">
          <div className="custom-buy-now">BUY NOW</div>
        </div>
        <p className='shoe-description'>
          {shoe.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
