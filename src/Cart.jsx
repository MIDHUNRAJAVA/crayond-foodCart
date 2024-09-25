import React, { useState } from 'react';
import './App.css';
import { CiSearch } from "react-icons/ci";
import { VscBook } from "react-icons/vsc";
import { BsThreeDotsVertical, BsPerson, BsCart4, BsTrash } from "react-icons/bs";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Cart = ({ cart,setCart, setShopView }) => {
 
   const [book,setBook]= useState(false)
  // Function to increment item quantity
  const incrementQty = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to decrement item quantity
  const decrementQty = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to calculate total amount for each item
  const calculateTotal = (item) => {
    return (item.qty * item.price).toFixed(2); 
  };

  return (
    <>
      <div className="search">
        <div className='search-box'>
          <CiSearch className='search-icon' />
          <input type="text" placeholder='Search' />
        </div>
        
        <div className='book'>
          <VscBook className={`book-icon ${book===true ? 'active' : ''}`} onClick={() => {setShopView('catalog'); setBook(!book); }} />
        </div>
      </div>

      <div className="summary">
        <div className="cart-summary">
          <h3>Cart summary</h3>
          <p className='order-id'>Order ID:<span className='span'>000001</span></p>
        </div>
        <div className="summary-buttons">
          <BsPerson className='summary-icon' />
          <MdOutlineTableRestaurant className='summary-icon' />
          <BsThreeDotsVertical className='summary-icon' />
        </div>
      </div>
      <hr />

      <div className='list-heading'>
        <div className="lh-item"><p>Item</p></div>
        <div className="lh-qty"><p>Qty</p></div>
        <div className="lh-amount">Amount(SAR)</div>
        {/* <p>Item</p>
        <p>Qty</p>
        <p className='list-heading-amount'> Amount (SAR)</p> */}
      </div>
      <hr />

      {cart.length === 0 ? (
        <div className='list-empty'>
          <BsCart4 className='empty-logo' />
          <p className='empty-heading'>Cart is empty</p>
          <p className='empty-heading one'>Scan barcode or add items from catalog</p>
        </div>
      ) : (
        cart.map((item, index) => (
          <>
            
          <div key={item.id} className="list-item">
            <div className='item-detail'>
              <p className='item-detail-name'>{item.name}</p>
              <p>{item.description}</p>
            </div>

            <div className='list-qty'>
              <button onClick={() => decrementQty(index)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => incrementQty(index)}>+</button>
            </div>

            <div className='list-amount'>
              <p>{calculateTotal(item)} </p>
            </div>

            <div className='list-remove'>
              <BsTrash onClick={() => setCart(cart.filter((_, i) => i !== index))} />
            </div>
          </div>
            <hr className='HR'/>
          </>
        ))
      )}
    </>
  );
};

export default Cart;
