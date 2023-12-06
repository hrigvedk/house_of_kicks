import React from 'react'
import { logout } from '../../api/api';
import routes from '../../Routes';

function Demo() {
  const _id = localStorage.getItem('_id');
const email = localStorage.getItem('email');
const token = localStorage.getItem('token');



const handleSubmit = async (e)=>{
  const isLogOut = await logout();
  console.log( "isLogout",isLogOut)
  if(isLogOut === true){
      localStorage.clear()
    window.location.href = routes.base;
  }


}
  return (
    <>
    <div>
      <h1>I'LL PUT LANDING PAGE HERE CHILL!</h1>
      <h3>{_id}</h3>
      <h3>{email}</h3>
      <h3>{token}</h3>
    </div>
    <button onClick={handleSubmit}>
     Log Out 
    </button>
    </>
  )
}

export default Demo

