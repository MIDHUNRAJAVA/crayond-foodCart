import React, { useState } from 'react';
import data from "./data";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { IoPrintSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const Catalog = ({ setShopView, handleProductClick }) => {
  const [selectedType, setSelectedType] = useState('all');

  // Function to filter the data based on selected type
  const filteredData = selectedType === 'all' ? data : data.filter(item => item.type === selectedType);

  return (
    <div className='catalog'>
      <div className="catalog-heading">
        <p>Catalog</p>
        <div className='heading-icon'>
          <BsThreeDotsVertical />
          <RxCross1 onClick={() => { setShopView('shop') }} />
        </div>
      </div>

      <div className="catalog-types">
        <div 
          className={`all common ${selectedType === 'all' ? 'active' : ''}`} 
          onClick={() => setSelectedType('all')}>
          <p>All</p>
        </div>
        <div 
          className={`fav common ${selectedType === 'fav' ? 'active' : ''}`} 
          onClick={() => setSelectedType('fav')}>
          <FaRegStar /><p>Favorite</p>
        </div>
        <div 
          className={`sandwich common ${selectedType === 'sandwich' ? 'active' : ''}`} 
          onClick={() => setSelectedType('sandwich')}>
          <p>Sandwich</p>
        </div>
        <div 
          className={`juice common ${selectedType === 'juice' ? 'active' : ''}`} 
          onClick={() => setSelectedType('juice')}>
          <p>Juice</p>
        </div>
        <div 
          className={`pizza common ${selectedType === 'pizza' ? 'active' : ''}`} 
          onClick={() => setSelectedType('pizza')}>
          <p>Pizza</p>
        </div>
        <div 
          className={`nachos common ${selectedType === 'nachos' ? 'active' : ''}`} 
          onClick={() => setSelectedType('nachos')}>
          <p>Nachos</p>
        </div>
      </div>

      <div className="catalog-food">
        {filteredData.map((item) => (
          <div className='food-item' key={item.id} onClick={() => handleProductClick(item)}>
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="details">
              <p>{item.name}</p>
              <p className='food-description'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="print catalog-print">
        <div className='coupon-icon catalog-print-bill'>
          <IoPrintSharp />
          <p>Print bill</p>
        </div>

        <div className='proceed-to-payment' onClick={()=>setShopView("shop")}>
          <p className=' proceed-to-payment-h'>Proceed to payment</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
