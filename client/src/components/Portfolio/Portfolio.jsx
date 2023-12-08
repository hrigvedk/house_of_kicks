import React from 'react';
import './Portfolio.css';
import Navigation from '../Navigation/Navigation';

const portfolio = [
  {
    brand: "New Balance",
    modelName: "New Balance 610Xv1",
    gender: "Men",
    marketPrice: "$135.99",
    purchasePrice: "$125.70",
    purchaseDate: "10-23-2023",
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
  {
    brand: "New Balance",
    modelName: "9060 Silver Metallic",
    gender: "Men",
    marketPrice: "$149.99",
    purchasePrice: "$165.70",
    purchaseDate: "10-30-2023",
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
    modelName: "BB550",
    gender: "Men",
    marketPrice: "$109.99",
    purchasePrice: "$130.30",
    purchaseDate: "08-21-2023",
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
];

const Portfolio = () => {
      // Calculate total profit/loss amount, total profit/loss percentage, and total invested
  let totalProfitLossAmount = 0;
  let totalInvested = 0;

  portfolio.forEach((item) => {
    const purchase = parseFloat(item.purchasePrice.replace('$', ''));
    const market = parseFloat(item.marketPrice.replace('$', ''));
    const difference = market - purchase;

    totalProfitLossAmount += difference;
    totalInvested += purchase;
  });

  // Function to calculate profit/loss color
const calculateProfitLossColor = (purchasePrice, marketPrice) => {
    const purchase = parseFloat(purchasePrice.replace('$', ''));
    const market = parseFloat(marketPrice.replace('$', ''));
    
    const difference = market - purchase;   
    return difference < 0 ? 'red' : 'green';
  }
  

  // Calculate total profit/loss percentage
  const totalProfitLossPercentage = ((totalProfitLossAmount / totalInvested) * 100).toFixed(2);

  return (
<>
<Navigation />
    <div className='d-flex justify-content-center'>
      <div className='row portfolio-container'>
        <h4>Your purchases :</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Purchase Date</th>
              <th>Purchase Price</th>
              <th>Market Price</th>
              <th>Total Profit / Loss</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item, index) => (
              <tr key={index}>
                <td>
                <img src={item.assets.img[0]} height={60} width={60} alt="sneaker" style={{ borderRadius: '8px', marginRight: '10px' }} />                    
                <span className='model-name' style={{ verticalAlign: 'top' }}>{item.modelName}</span>
                </td>
                <td>{item.purchaseDate}</td>
                <td>{item.purchasePrice}</td>
                <td>{item.marketPrice}</td>
                <td style={{ color: calculateProfitLossColor(item.purchasePrice, item.marketPrice) }}>
                    {calculateProfitLoss(item.purchasePrice, item.marketPrice)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className='d-flex justify-content-center'>
        <div className='row portfolio-container'>
            <h4 className='stats-title'>Adding up :</h4>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <h6>
                        Total Profit / Loss Amount :
                    </h6>
                </div>
                <div className='col-md-4 text-center'>
                    <h6>
                        Total Profit / Loss % :
                    </h6>
                </div>
                <div className='col-md-4 text-center'>
                    <h6>
                        Total Invested :
                    </h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 text-center' style={{color: totalProfitLossAmount < 0 ?  'red' : 'green'}}>
                    <h3>
                    <h3>{totalProfitLossAmount < 0 ? '-$' : '$'}{Math.abs(totalProfitLossAmount).toFixed(2)}</h3>
                    </h3>
                </div>
                <div className='col-md-4 text-center'  style={{color: totalProfitLossPercentage < 0 ?  'red' : 'green'}}>
                    <h3>
                        {totalProfitLossPercentage}%
                    </h3>
                </div>
                <div className='col-md-4 text-center'>
                    <h3>
                        ${totalInvested.toFixed(2)}
                    </h3>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

// Function to calculate profit/loss
const calculateProfitLoss = (purchasePrice, marketPrice) => {
    const purchase = parseFloat(purchasePrice.replace('$', ''));
    const market = parseFloat(marketPrice.replace('$', ''));
    
    const difference = market - purchase;
    const percentage = ((difference / purchase) * 100).toFixed(2);
    
    const roundedDifference = Math.abs(difference).toFixed(2);
    return `${difference >= 0 ? '+' : '-'}$${roundedDifference} (${percentage}%)`;
  }
  

export default Portfolio;
