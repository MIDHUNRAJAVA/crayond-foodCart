import React from 'react'
// import './App.css'

import { FaCartPlus } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { PiBellLight } from "react-icons/pi";
import { CiBoxes } from "react-icons/ci";
import { BsShopWindow } from "react-icons/bs";
import { TfiDashboard } from "react-icons/tfi";
import { BsReceiptCutoff } from "react-icons/bs";

import logo from './assets/logo.png';

const Navbar = () => {
  return (
        <div className='nav-bar'>
          <div className='logo'>
                   <img src={logo} alt="logo" />
          </div>
        <div className="item">
             <TfiDashboard className='icon'/>
              <p>Dashboard</p>
        </div>
        <div className="item sales">
             <FaCartPlus  className='icon'/>
              <p>Sales</p>

        </div>
        <div className="item">
            <BsReceiptCutoff className='icon'/>
               <p>Orders</p>
        </div>
        <div className="item">
             <BsPersonSquare className='icon'/>
              <p>Customer</p>
        </div>
        <div className="item">
            <BsShopWindow className='icon'/>
              <p>Items</p>
        </div>
        <div className="item">
            <CiBoxes className='icon'/>
              <p>Inventory</p>
        </div>
        <div className="item">
            <PiBellLight className='icon'/>
              <p>Alerts</p>
        </div>
        <div className='nestle'> 
          <img src="https://cdn.worldvectorlogo.com/logos/nestle-4.svg" alt="" />
        </div>
    </div>
  )
}

export default Navbar