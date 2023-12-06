// ProductCatalog.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './ProductCatalog.css';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';

const shoesData = [
{
    brand: "Nike",
    modelName: "Nike Air Max 1 86 OG G",
    gender: "Men",
    price: "$136.97",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 3.5,
    ankleType: "High",
    assets: {
        "img": ['https://drive.google.com/uc?id=11Gul8SkqKjWCN6bV2bHpJnYyZ6aLCwZ_','https://drive.google.com/uc?id=1yKJ1Bz9mlQbcFyue3sq7ApqN1WYTROT-','https://drive.google.com/uc?id=1TYkuaNn3jXK9fr8TnMGoW_sc-HfN6c86','https://drive.google.com/uc?id=1u_8KT2U2tiYcqQxeYN2eMYE2oWJ46WVs','https://drive.google.com/uc?id=1FcDqS0ugE2MKo9bbDXxA3aoGhfOo5cKi','https://drive.google.com/uc?id=10ThfwmLhhCB6ilQY1yVRC5KON-Lgbfa4'],
        "vid": [],
        "mtl": []
    },
    description: "Lorem Ipsum Dolor Sit"
},
{
    brand: "Nike",
    modelName: "Nike Air Max 97",
    gender: "Men",
    price: "$175",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 4.5,
    ankleType: "High",
    assets: {
        "img": ['https://drive.google.com/uc?id=1K0ScdJJ0J9Rm8JTUEMtZskH7pX03mjvF','https://drive.google.com/uc?id=1LprkXfPpFfXKO78f2qrcKPVt0WG2ewLJ','https://drive.google.com/uc?id=1J5kB-A-H-DFEfOgRVhcWTNE6v9ERs6kU','https://drive.google.com/uc?id=1_wfEQlRpl74loo8g89lzj09m64tePtc8','https://drive.google.com/uc?id=1rtW9_6xaccUaX9xzuriH596jTmq7_JmT','https://drive.google.com/uc?id=1dn6Cyy2rCuDvMJO1drkY7LYIFRvniGse'],
        "vid": [],
        "mtl": []
    },
    description: "Lorem Ipsum Dolor Sit"
},
{
   brand: "Nike",
   modelName: "Nike Blaze Mid 77 Vintage",
   gender: "Men",
   price: "$87.97",
   availableSizes: [5.5, 8, 8.5, 9, 12],
   rating: 4,
   ankleType: "High",
   assets: {
      "img": ['https://drive.google.com/uc?id=1PQrraUj7SnzGESpdeyYe-D2xBcIFW7Sy','https://drive.google.com/uc?id=1jlSHm3mwDqg2oWiTddLtykJkyBY-SXSj','https://drive.google.com/uc?id=1oCLqHubW7oopfgW4y2GS8q83aLXws0KR','https://drive.google.com/uc?id=1V3t1dkyEASlXglUMJQ3KNJExfyuZdGZS','https://drive.google.com/uc?id=1LE0htJoSOiOsKglohbmLanYL9oimeWow','https://drive.google.com/uc?id=1an8xg3RRpeu8kBKueJ6gxJP9FPIoBM8N'],
      "vid": [],
      "mtl": []
  },
  description: "Lorem Ipsum Dolor Sit"
},
{
   brand: "Nike",
   modelName: "Nike Pegasus 40",
   gender: "Men",
   price: "$130",
   availableSizes: [5.5, 8, 8.5, 9, 12],
   rating: 3,
   ankleType: "High",
   assets: {
      "img": ['https://drive.google.com/uc?id=1cY0OaUBCutMCAhFYDUvGlJvn73D9MCRC','https://drive.google.com/uc?id=1bhIwqIqIjIGQbbpPKdg26wxL5bwF_Yo_','https://drive.google.com/uc?id=1X5PdlNAMp4c3xqK6FWhvOxhTiYvaEE2W','https://drive.google.com/uc?id=1-0l1467lh7mRRgfeqKaNG9sb0kA0PhFF','https://drive.google.com/uc?id=16saFDd-6YxJUTdnoFHnjXxREIsGxRp-d','https://drive.google.com/uc?id=1RiBetxcpmDyko620ldhZNVFAfuLAwEPn','https://drive.google.com/uc?id=1aJ-KSEtvUEDmPU5lWbkG6XFhj32hZSor'],
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
//   {
//      brand: "Nike",
//      modelName: "Nike Vomero 5",
//      gender: "Men",
//      availableSizes: [5.5, 8, 8.5, 9, 12],
//      rating: 5,
//      ankleType: "High",
//      assets: {
//         "img": ['https://drive.google.com/uc?id=1bsmhYvKM0MtGs0f3gIKFwy1dCZtUbdcE'],
//         "vid": [],
//         "mtl": []
//     },
//     description: "Lorem Ipsum Dolor Sit"
//   },
//   {
//      brand: "Nike",
//      modelName: "Nike Air Max 270",
//      gender: "Men",
//      availableSizes: [5.5, 8, 8.5, 9, 12],
//      rating: 5,
//      ankleType: "High",
//      assets: {
//         "img": ['https://drive.google.com/uc?id=1DgyPmb02sukhXkI14YBLrYXo7AdK5eGa'],
//         "vid": [],
//         "mtl": []
//     },
//     description: "Lorem Ipsum Dolor Sit"
//   },
// {
//     brand: "Nike",
//     modelName: "Nike Dunk Low Retro",
//     gender: "Men",
//     availableSizes: [5.5, 8, 8.5, 9, 12],
//     rating: 5,
//     ankleType: "High",
//     assets: {
//         "img": ['https://drive.google.com/uc?id=1y5yr09HS6SnyNhQYx0Gj2Hz8PZLIfZJe'],
//         "vid": [],
//         "mtl": []
//     },
//     description: "Lorem Ipsum Dolor Sit"
// },
// {
//    brand: "Nike",
//    modelName: "Air Jordan 1 Low",
//    gender: "Men",
//    availableSizes: [5.5, 8, 8.5, 9, 12],
//    rating: 5,
//    ankleType: "High",
//    assets: {
//       "img": ['https://drive.google.com/uc?id=1cgzzMPzJV5ggTV-XjpGJgy_LrY6KXtjk'],
//       "vid": [],
//       "mtl": []
//   },
//   description: "Lorem Ipsum Dolor Sit"
// },
// {
//    brand: "Nike",
//    modelName: "Nike Jordan 4 Craft Olive",
//    gender: "Men",
//    availableSizes: [5.5, 8, 8.5, 9, 12],
//    rating: 5,
//    ankleType: "High",
//    assets: {
//       "img": ['https://drive.google.com/uc?id=1DKMnsMRiA8Cb2zphFaikfSuixKzBZc6C'],
//       "vid": [],
//       "mtl": []
//   },
//   description: "Lorem Ipsum Dolor Sit"
// },
//   {
//      brand: "Nike",
//      modelName: "Air Jordan 8 Winterized",
//      gender: "Men",
//      availableSizes: [5.5, 8, 8.5, 9, 12],
//      rating: 5,
//      ankleType: "High",
//      assets: {
//         "img": ['https://drive.google.com/uc?id=1b1494cmF6NyhxI82CoPHOxt0T87Cai3f'],
//         "vid": [],
//         "mtl": []
//     },
//     description: "Lorem Ipsum Dolor Sit"
//   },
//   {
//      brand: "Nike",
//      modelName: "Air Jordan 2 Retro",
//      gender: "Men",
//      availableSizes: [5.5, 8, 8.5, 9, 12],
//      rating: 5,
//      ankleType: "High",
//      assets: {
//         "img": ['https://drive.google.com/uc?id=1Qorku7R9UmB_E2fkyvEHxrpe-L5mXSev'],
//         "vid": [],
//         "mtl": []
//     },
//     description: "Lorem Ipsum Dolor Sit"
//   },
  // Add more shoes as needed
];
const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredShoes = shoesData.filter((shoe) =>
    shoe.modelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="catalog-container container-fluid">
        <Navigation onSearchChange={handleSearchChange} />
        <Routes>
          <Route
            path="/"
            element={<Catalog shoesData={filteredShoes} />}
          />
          {filteredShoes.map((shoe) => (
            <Route
              key={shoe.modelName}
              path={`/product/${shoe.modelName}`}
              element={<ProductDetails shoe={shoe} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default ProductCatalog;