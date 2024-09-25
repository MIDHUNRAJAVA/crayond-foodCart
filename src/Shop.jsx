import React from 'react'
import './App.css';
import { LiaReceiptSolid } from "react-icons/lia";
import { SlNote } from "react-icons/sl";
import { BsPersonSquare } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoPrintSharp } from "react-icons/io5";

const Shop = () => {
  return (
   <>
     <div className='payment-summary'>
          <div className="payment-page-summary">
    
              <div className="heading">
                  <h3>Payment summary</h3>
                  <div className='username'>
                      <LiaReceiptSolid className='payment-icon'/>
                      <p>Ashwin</p>
                  </div>
              </div>

              <div className="sub-total">
                  <p>Sub total</p>
                  <p className='bold'>SAR 330.00</p>
              </div>


              <div className="taxable-amount">
                    <p>Taxable amount</p>
                    <p className='bold'>SAR 450.00</p>
              </div>

              <div className="total-tax">
                  <p>Total tax</p>
                  <p className='bold'>SAR 120.00</p>
              </div>
               <hr />
              <div className="grand-total">
                    <p>Grand total</p>
                    <h2 className='grand-total-amount'>SAR 650.00</h2>
              </div>

          </div>

        <div className="shop-button">
            
              <hr />

              <div className="note">
                    <SlNote/>
                    <p>Add notes</p>
                    
              </div>

              <hr />

                <div className="coupon">
                    
                    <div className="coupon-icon">
                      <BsPersonSquare/>
                        <p>Customer</p>
                    </div>

                    <div className="coupon-icon">
                         <BiSolidDiscount/>
                        <p>Coupon</p>
                    </div>

                    <div className="coupon-icon">
                           <RiDiscountPercentFill/>
                          <p>Discount</p>
                    </div>

                </div>

                <hr />

                <div className="print">

                    <div className='print-bill'>
                            <IoPrintSharp/>
                            <p>Print bill</p>
                    </div>

                    <div className='proceed-to-payment'>

                         <p className='proceed-to-payment-h'>Proceed to payment</p>

                    </div>

                </div>

           </div>
      </div>
   
   </>
  )
}

export default Shop