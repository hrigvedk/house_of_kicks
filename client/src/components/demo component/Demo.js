import React from 'react'

function Demo() {
  const _id = localStorage.getItem('_id');
const email = localStorage.getItem('email');
const token = localStorage.getItem('token');

// Use these values as needed in your redirected page
// For example, logging them to the console

  return (
    <div>
      <h1>I'LL PUT LANDING PAGE HERE CHILL!</h1>
      <h3>{_id}</h3>
      <h3>{email}</h3>
      <h3>{token}</h3>
    </div>
  )
}

export default Demo

