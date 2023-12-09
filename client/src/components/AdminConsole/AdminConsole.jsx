import React, { useEffect, useState } from 'react';
import './AdminConsoleStyles/adminConsoleStyles.css'
import SneakerSalesPieChart from '../Analytics/SneakersSalePieChart';
import TopUsersComposedChart from '../Analytics/TopUsersComposedChart';
import TopPreferredSneakersRadarChart from '../Analytics/TopPreferredSneakersScatterChart ';
import SneakerOrdersBarChart from '../Analytics/SneakerOrdersBarChart';
import SneakerOrdersRadialBarChart from '../Analytics/SneakerOrdersBarChart';
import { deleteUser, logout } from '../../api/api';
import routes from '../../Routes';


const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  console.log(token);

    const sneakerSalesData = [
    { name: 'Nike', salesPercentage: '25%' },
    { name: 'Adidas', salesPercentage: '35%' },
    { name: 'New Balance', salesPercentage: '40%' },

  ];

  const topUsersData = [
    {
      username: 'Hrigved',
      orders: 11,
      totalProfit: 1500,
    },
    {
      username: 'Ayush',
      orders: 13,
      totalProfit: 1800,
    },
    {
      username: 'Aayush',
      orders: 15,
      totalProfit: 1900,
    },
    // Add more users as needed...
  ];


  // const attributes = Object.keys(topPreferredSneakersData[0]).filter(key => key !== 'sneaker');

  // const transformedData = attributes.map(attribute => ({
  //   attribute,
  //   ...topPreferredSneakersData.reduce((accumulator, currentValue) => {
  //     accumulator[currentValue.sneaker] = currentValue[attribute];
  //     return accumulator;
  //   }, {}),
  // }));
  const topPreferredSneakersData = [
    {
      sneaker: 'Nike Air Max',
      comfort: 9,
      durability: 8,
      style: 9,
      price: 7,
      popularity: 10,
    },
    {
      sneaker: 'Adidas UltraBoost',
      comfort: 10,
      durability: 7,
      style: 8,
      price: 8,
      popularity: 9,
    },
    {
      sneaker: 'New Balance 990',
      comfort: 9,
      durability: 9,
      style: 7,
      price: 6,
      popularity: 8,
    },
    // Add more top preferred sneakers as needed...
  ];

  const sneakerOrdersData = [
    { sneaker: 'Nike Air Max', orders: 150 },
    { sneaker: 'Adidas UltraBoost', orders: 120 },
    { sneaker: 'New Balance 990', orders: 90 },
    { sneaker: 'Jordan 1', orders: 80 },
    { sneaker: 'Vans Old Skool', orders: 70 },
    // Add more sneakers as needed...
  ];
  useEffect(() => {
    // Fetch users' data
    const fetchData = async () => {
      try {
        const response = await fetch('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/users');
        const data = await response.json();
        console.log("users", data)
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle errors fetching users' data
      }
    };

    fetchData();
  }, []);

//   const handleDeleteUser = (userId) => {
//     // Function to delete user by ID
//     // Implement your logic for deleting a user here
//   };
const CustomLegend = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {data.map((item, index) => (
        <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: item.fill, marginRight: '5px' }}></div>
          <span>{item.sneaker}</span>
        </div>
      ))}
    </div>
  );
};

  // Function to handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      // Call the deleteUser function from api.js to delete the user
      const response = await deleteUser(userId);
      console.log(response.data);
      // Assuming the response indicates successful deletion, update the users' list after deletion
      if (response) {
        // Filter out the deleted user from the current users list
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
        console.log('User deleted successfully!');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
      // Handle errors related to user deletion
    }
  };

  const handleLogout = async () => {
    const isLogOut = await logout(); 
    if (isLogOut === true) {
      localStorage.clear();
      window.location.href = routes.base;
    }
  };

  return (
    <div className="admin-page">
      <div className='top-row'>
      <h1>Admin Console</h1>
      <button
            className="logout-button dim"
            style={{ backgroundColor: '#050D14', color: 'white', border: '1px solid white' }}
            onClick={ handleLogout}
          >
            Logout
          </button>
      </div>
      <div className="cards-container">
        {/* Placeholder for three cards */}
        <div className="admin-card">
          <h5>Our Top Sale Contributors</h5>
          <SneakerSalesPieChart data= {sneakerSalesData}/>
        </div>
        <div className="admin-card">
        <h5>Top Profit makers this week</h5>
          <TopUsersComposedChart data ={topUsersData} />
        </div>
        <div className="admin-card">
          {/* <TopPreferredSneakersRadarChart data ={topPreferredSneakersData} /> */}
          {/* <SneakerOrdersBarChart data = {sneakerOrdersData} /> */}
          <h5>Top selling Sneakers of the Month</h5>
          <SneakerOrdersRadialBarChart data = {sneakerOrdersData} />
       
            {/* <CustomLegend data ={sneakerOrdersData} /> */}
  
        </div>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                <button onClick={() => handleDeleteUser(user._id)}>Delete User</button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
