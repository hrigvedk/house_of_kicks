import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css'; // Create a CSS file for styling
import Catalog from './components/Catalog';
import Footer from './components/Footer'

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bestSellers = [
  {
     brand: "Nike",
     modelName: "Nike Vomero 5",
     gender: "Men",
     price: "$220.50",
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
     price: "$180.70",
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
    modelName: "Nike Dunk Low Retro",
    gender: "Men",
    price: "$180.70",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 5,
    ankleType: "High",
    assets: {
        "img": ['https://drive.google.com/uc?id=1y5yr09HS6SnyNhQYx0Gj2Hz8PZLIfZJe'],
        "vid": [],
        "mtl": []
    },
    description: "Lorem Ipsum Dolor Sit"
},
{
  brand: "Nike",
  modelName: "Nike Dunk High Premium",
  gender: "Men",
  price: "$95.97",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1C2ZEIYj7uo-MY7wOo0JMApbOQ9S-F7b4','https://drive.google.com/uc?id=1xhhs7qbIAmk2_D8EYTRJots3kQsivMqK','https://drive.google.com/uc?id=1ZO48CxRoyF4256tYMEpamOyQ-tp3Oa1O','https://drive.google.com/uc?id=16DlqXmoRSue27vCGyfcaOWN0laMFj961','https://drive.google.com/uc?id=1oV5Aglyo8cFixqYrpbH1nXxIEJZw-Clu','https://drive.google.com/uc?id=1adMypitpvVNeuPrLnw3HorE9R_ajqoNH','https://drive.google.com/uc?id=1AbprzpjHjnQn8z6dtN7G61MSAVqq3NfO'],
      "vid": [],
      "mtl": []
  },
  description: "Lorem Ipsum Dolor Sit"
},
    ];

    const carouselImages = [
      'https://drive.google.com/uc?id=1Q2pO5LjHuM7srQ4Q50SvVWczgd532GzL',
      'https://drive.google.com/uc?id=1RvJGcJcqBmB8zNkJ8-IlLsDcp2ieJ-Su',
      'https://drive.google.com/uc?id=1fGIveY_OM2CqPfle-ItGlaQhqoNeXcWD',
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '25%',
      beforeChange: (current, next) => setCurrentSlide(next),
    };
  
    return (
      <div>
        <div className="carousel-container">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image}
                  alt={`carousel-${index}`}
                  className={`carousel-image ${
                    currentSlide !== index ? 'blur' : ''
                  }`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="left-aligned-text">
          <h3>Look the bestselling sneakers :</h3>
        </div>
        <Catalog shoesData={bestSellers} />
        <div className="left-aligned-text">
          <h3>Know more about your favourite sneakers :</h3>
        </div>
        <div className="row sneaker-article" >
          <div className="col-md-4">
            <img
              src="https://drive.google.com/uc?id=1yJ9M11hBp3Fqjjk_mDj8ZgfU7uZ7Q1MR" // Replace with your actual image source
              alt="Responsive"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h3>The birth of American Sneaker</h3>
            <p>Founded in 1906 in Boston, Massachusetts, New Balance began as the "New Balance Arch Support Company," specializing in arch supports and orthopedic footwear. The company pivoted to athletic shoes in the 1960s with the introduction of the "Trackster," the first running shoe with a ripple sole. This marked a turning point, establishing New Balance as a pioneer in the running shoe industry. Throughout the decades, the brand's focus on quality craftsmanship, support, and unique design, notably the iconic "N" logo, propelled it to international recognition. New Balance's commitment to domestic manufacturing, technological innovations, and collaborations has solidified its status as a global leader in athletic footwear.</p>
            <p>
Despite facing competition, New Balance's dedication to quality, comfort, and innovation ensures its continued prominence in the athletic footwear.</p>
            <button className='shop-now-button'>Shop Now</button>
          </div>
        </div>
        <div className="row sneaker-article" >
          <div className="col-md-8">
            <h3>Tech in Sneaker culture</h3>
            <p>Nike stands at the forefront of tech-infused footwear, integrating innovations like self-lacing capabilities with Nike Adapt technology. Advanced materials such as Flyknit ensure a lightweight and adaptive fit. The brand's commitment to sustainability is evident through the use of recycled materials and eco-friendly manufacturing. Nike consistently pushes the boundaries, aiming to create sneakers that not only meet athletic demands but also seamlessly integrate technology, offering a glimpse into the future of connected and smart footwear.</p>
            <p>Advanced materials, such as Flyknit, ensure a lightweight and adaptive fit, showcasing the brand's commitment to cutting-edge design and technology.</p>
            <button className='shop-now-button'>Shop Now</button>
          </div>
          <div className="col-md-4">
            <img
              src="https://drive.google.com/uc?id=1l_fmAtHAiQXXHFupJ6b3dBHDWfcRnCGT" // Replace with your actual image source
              alt="Responsive"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row sneaker-article" >
          <div className="col-md-4">
            <img
              src="https://drive.google.com/uc?id=1FMoQXGUGKzPOhfp3H_CAwxyaQxck9jeE" // Replace with your actual image source
              alt="Responsive"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h3>Age of Athleisure</h3>
            <p>Adidas, a global giant in sports apparel and footwear, has a profound impact on the athletic world. Founded in 1949 by Adolf Dassler, the brand's commitment to sports excellence is embedded in its DNA. Adidas sponsors top athletes, teams, and major sporting events, solidifying its presence across diverse disciplines, from soccer to basketball and running. Renowned for its iconic three-stripe logo, Adidas continually innovates, introducing performance-enhancing technologies like Boost cushioning. Beyond professional sports, Adidas fosters a culture of inclusivity and encourages active lifestyles, making its mark as a symbol of sportswear excellence globally, transcending boundaries and resonating with athletes of all levels.</p>
            <button className='shop-now-button'>Shop Now</button>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default LandingPage;