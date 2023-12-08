// ProductCatalog.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './ProductCatalog.css';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import LandingPage from './LandingPage';
import Cart from './components/Cart';
import Portfolio from './components/Portfolio';

const shoesData = [
{
    brand: "Nike Air Max",
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
    description: "A streetwear legend hits the links in the Air Max 1 G. Featuring the 4-window design that lets you peak at the large Air unit underneath, this is on-course cool, confidence and comfort personified. It sports the vintage Air Max 1 details you love, like clean lines and unmistakable colors, and melds them with our game-changing golf technology, so you can play all day, year-round in a timeless fit."
},
{
    brand: "Nike Air Max",
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
    description: "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort."
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
  description: "In the ‘70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic since the beginning."
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
  description: "A springy ride for any run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you’re logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it’s still the established road runner you can put your faith in, day after day, run after run."
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
      description: "Vintage style soars sky-high with the return of the Nike Dunk High. Premium leather, fresh details, plush padding around the ankle and an unmistakable silhouette help these kicks make any look a slam dunk."
  },
  {
    brand: "New Balance",
    modelName: "Made in USA 990v6",
    gender: "Men",
    price: "$199.99",
    availableSizes: [5.5, 8, 8.5, 9, 12],
    rating: 5,
    ankleType: "High",
    assets: {
        "img": ['https://drive.google.com/uc?id=1Ul4zZO8w1WhpE-hpcyZ4i4WSs6bDMR9N',
                'https://drive.google.com/uc?id=1Ul4zZO8w1WhpE-hpcyZ4i4WSs6bDMR9N',
                'https://drive.google.com/uc?id=1s0K7jouROwy8sjOCoa3sOT2RgQYMy3_a',
                'https://drive.google.com/uc?id=19sWmfXaHaxp_kcjzejurVfPdSovU2u6E',
                'https://drive.google.com/uc?id=1pPKDNIXzVtF01bJZmSQ8MJQuzWhUZum0',],
        "vid": [],
        "mtl": []
    },
    description: "The designers of the first 990 were tasked with creating the single best running shoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates. The upper dispenses with the standard midfoot saddle, allowing the pigskin and synthetic overlays to flow from heel to toe across the mesh underlay, for a speedy, streamlined look. While the evolved design marks one of the most dramatic changes from one generation model to the next that the 990 has ever seen, the greatest leap forward occurs on the inside. The addition of FuelCell midsole cushioning means that the evolution of the 990 can be felt as much as it can be seen."
},
{
  brand: "New Balance",
  modelName: "9060 Black Castlerock",
  gender: "Men",
  price: "$149.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1yTz03tb1JCmvEtbD7OM8FL07Z3NGa_oC',
              'https://drive.google.com/uc?id=1yTz03tb1JCmvEtbD7OM8FL07Z3NGa_oC',
              'https://drive.google.com/uc?id=1eigX4b9yOXVCSAzeeFfs8GN1b7Q7FxNI',
              'https://drive.google.com/uc?id=1NMNTULq-qqTlYYmxBpngtA7RdN3Ro4SA',
              'https://drive.google.com/uc?id=14o9rMY-6caicxPbqMFH_1-HgTUPHcJUK',],
      "vid": [],
      "mtl": []
  },
  description: "The 9060 is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconic models in New Balance history. The 9060 reinterprets familiar elements sourced from classic 99X models with a warped sensibility inspired by the proudly futuristic, visible tech aesthetic of the Y2K era. Sway bars, taken from the 990, are expanded and utilized throughout the entire upper for a sense of visible motion, while wavy lines and scaled up proportions on a sculpted pod midsole place an exaggerated emphasis on the familiar cushioning platforms of ABZORB and SBS."
},
{
  brand: "New Balance",
  modelName: "MADE in USA 993 Core",
  gender: "Men",
  price: "$199.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1D_tn4ppY5mfsfgtWEmSG6Yw0QZhVVAsj',
              'https://drive.google.com/uc?id=1gVHmYQMe4lW58sOyp5cfFxyXpJ03LlR9',
              'https://drive.google.com/uc?id=1DFsKQSfqbjeacwb-wZin9ZCjtHCPLFo3',
              'https://drive.google.com/uc?id=1m4792Oz3W_g1SB4tV39B_vcsfdbPpgF3',
              'https://drive.google.com/uc?id=1qVQ7nK63QBqEniOyHi7M1pnYP7xJu1D5',],
      "vid": [],
      "mtl": []
  },
  description: "Superior comfort meets classic style in our men’s Made in US 993 running shoe. A favorite from the legendary 990 series, the 993 features responsive cushioning and premium materials ready for a run or all-day wear. Manufactured in the US for over 75 years and representing a limited portion of our US sales, New Balance Made is a premium collection that contains a domestic value of 70% or greater."
},
{
  brand: "New Balance",
  modelName: "2002R",
  gender: "Men",
  price: "$139.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1shfsMINe1Lrtb4MN9KihByz0KR3jvVgH',
              'https://drive.google.com/uc?id=1shfsMINe1Lrtb4MN9KihByz0KR3jvVgH',
              'https://drive.google.com/uc?id=1G2vw37UyJ7pSghffy4odXebXgwz3-pue',
              'https://drive.google.com/uc?id=1-CFS8ivH_Jh19BFMY8hDNOgbmvSC6KNv',
              'https://drive.google.com/uc?id=1_J9ivwjwHy95qHMMCQ-PyA5lqEN3CH1G',
            ],
      "vid": [],
      "mtl": []
  },
  description: "A premium upper construction offers an elevated take on a classic look."
},
{
  brand: "New Balance",
  modelName: "550 Slate Grey",
  gender: "Men",
  price: "$119.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=11SHOCJR0NL5MbC_b3x_NOzF_HKOK30P4',
              'https://drive.google.com/uc?id=1KyO_1bVxWfxUhDTeBNYFQNodLI1fLdD4',
              'https://drive.google.com/uc?id=1lPYqmnRs0csjq2zRsPCWR9pc0GQ8rhXu',
              'https://drive.google.com/uc?id=1lnjmUM9PZoiBPr7gGP6P_Z03q32v_-7k',
              'https://drive.google.com/uc?id=1ApLroWO1oMjNrxXlem22ZAVjoj4iKOV6',
            ],
      "vid": [],
      "mtl": []
  },
  description: "The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup in 2021, quickly becoming a global fashion favorite. The 550’s low top, streamlined silhouette offers a clean take on the heavy-duty designs of the late ‘80s, while the dependable leather, synthetic, and mesh upper construction is a classic look in any era."
},
{
  brand: "New Balance",
  modelName: "MX608V5 Slip Resistant",
  gender: "Men",
  price: "$74.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1Q9nRbI_iplVvzukIJiCwvLetN8EuRbL4',
              'https://drive.google.com/uc?id=1Dhu69KrcDsStLcNmRiU9VEWskQrqwGjt',
              'https://drive.google.com/uc?id=1pf2u9TJ8-0vF_x5pUqj31aP37rQD4Web',
              'https://drive.google.com/uc?id=1TQUIWN8O3IbnSp5JGoczCXT1EmbgdT8J',
              'https://drive.google.com/uc?id=17Tchq81s2TCY-tWW6Onnz8pl2x6a_hPA',
            ],
      "vid": [],
      "mtl": []
  },
  description: "It’s easy to be motivated to move when you have the all-day comfort of the men's 608v5. The newest generation of this classic trainer features an enhanced ABZORB heal pad for premium cushioning and abundant outsole flex grooves for superior flexibility."
},
{
  brand: "New Balance",
  modelName: "327 Midful Grey",
  gender: "Men",
  price: "$99.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1cJp_kuDHQw6KHg92MBRkYFgb3blZBgvx',
              'https://drive.google.com/uc?id=101vumFyY1bqjklPk3DOW516OVSk0Gd-O',
              'https://drive.google.com/uc?id=1EsePt9__7n1GxCAd3Xlet1ydW5WNqx_7',
              'https://drive.google.com/uc?id=1zAjnWnz9jimjazHHJlXHZDTmILBaqnhr',
              'https://drive.google.com/uc?id=1Y9OpOzxBYxzuNva7vcMSlZV2TdBb8r_2',
            ],
      "vid": [],
      "mtl": []
  },
  description: "A contemporary expression of 70s heritage designs, this shoe is built for all-day wear."
},
{
  brand: "New Balance",
  modelName: "BB550",
  gender: "Men",
  price: "$109.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=198JfuQsrn5ntSrBqa8g6-7n6t7qn7g5i',
              'https://drive.google.com/uc?id=1rlGH9XAxNWrZczx0-2AuK1JddeZ3Gpyh',
              'https://drive.google.com/uc?id=1Lj0dtKFrYfMzdxRo2UBzyQY5laiifo5x',
              'https://drive.google.com/uc?id=1mgTmlr_aoriqDSgr5gHJwdgi9ZtTrnfb',
              'https://drive.google.com/uc?id=16YwwCxunHC1yqyqfgDvl_nYjvqZOHKdU',
            ],
      "vid": [],
      "mtl": []
  },
  description: "The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup in 2021, quickly becoming a global fashion favorite. The 550’s low top, streamlined silhouette offers a clean take on the heavy-duty designs of the late ‘80s, while the dependable leather upper construction is a classic look in any era."
},
{
  brand: "New Balance",
  modelName: "9060 Silver Metallic",
  gender: "Men",
  price: "$149.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=1FeD-cM-GJogdhlC4K0Xv74xiWBzIIC_B',
              'https://drive.google.com/uc?id=1rGqlbby71GwuGLSRnxUz3gAthvmU0V5u',
              'https://drive.google.com/uc?id=1s-NXw9YGKP_IPQUJc2f4V5cXWZbTUx9_',
              'https://drive.google.com/uc?id=1R2GjdW-nzJPcFvvQM2QRC3eyrOGhTihB',
              'https://drive.google.com/uc?id=1p2APC_qUl8mlit810HaRwBW6Rf865SE0',
            ],
      "vid": [],
      "mtl": []
  },
  description: "The 9060 is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconic models in New Balance history. The 9060 reinterprets familiar elements sourced from classic 99X models with a warped sensibility inspired by the proudly futuristic, visible tech aesthetic of the Y2K era. Sway bars, taken from the 990, are expanded and utilized throughout the entire upper for a sense of visible motion, while wavy lines and scaled up proportions on a sculpted pod midsole place an exaggerated emphasis on the familiar cushioning platforms of ABZORB and SBS."
},
{
  brand: "New Balance",
  modelName: "New Balance 610Xv1",
  gender: "Men",
  price: "$135.99",
  availableSizes: [5.5, 8, 8.5, 9, 12],
  rating: 4.5,
  ankleType: "High",
  assets: {
      "img": ['https://drive.google.com/uc?id=14NBCcwA9JQd6VJG8bUiZx-a5bhmxGt64',
              'https://drive.google.com/uc?id=1qTpLeEqw_JVr5fHFLb97lR_pumLHBmuM',
              'https://drive.google.com/uc?id=1DdGFWSvaxWRjeCVfx8nsZZ6Ez0ygenBp',
              'https://drive.google.com/uc?id=1sx_z9zAbzsmfXh-W5yOVV-5uqqTTPat8',
              'https://drive.google.com/uc?id=1jGMjpGmRD02EImmaKeLGyc6ThbUTyM4H',
            ],
      "vid": [],
      "mtl": []
  },
  description: "The New Balance 610Xv1 is a sleek and practical shoe that's equipped with GORE-TEX® waterproof fabric to help keep your feet cool and dry in changing weather conditions."
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
          <Route
            path="/Landing"
            element={<LandingPage />}
          />
          <Route
            path="/Cart"
            element={<Cart />}
          />
          <Route
            path="/Portfolio"
            element={<Portfolio />}
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