import React, { useState } from "react";

function FoodOrderForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Order Successful! \n Your order was ${order}.\nShow confirmation number for pickup.`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} /><br/>
      <label htmlFor="phone">Phone:</label>
      <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/><br/>
      <label htmlFor="address">Address:</label>
      <input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
      <label htmlFor="order">Order:</label>
       <input type="text" name="order" id="order" value={order} onChange={(e) => setOrder(e.target.value)} /><br/>
      <input type="submit" value="Submit Order" />
    </form>
  );
}

export default FoodOrderForm;