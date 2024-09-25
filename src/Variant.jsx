import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const Variant = ({setShopView,selectedProduct,cart,setCart}) => {
    console.log(selectedProduct)
    const handleAdd = (selectedProduct)=>
    {
        if (cart.some(item => item.id === selectedProduct.id)) {
            // console.log('Product already in cart:', selectedProduct);
            alert("Item Already Added");
            return; 
        }
        const newArr = [...cart];
        newArr.push(selectedProduct)
        setCart(newArr)
        // console.log(newArr)
    }
  return (
 
    <div className='variant'>
       
       <div className='variant-top'>
        <div className='variant-heading'>
            <p>Vairants & Add-ons</p>
            <IoIosArrowDropright onClick={()=>{setShopView('catalog')}}/>
        </div>

        <div className='variant-description'>
            <img src={selectedProduct.image} alt="not available" />
            <p>{selectedProduct.name}</p>
        </div>

        <div className='variant-count'>
            <div className='variant-count-1'>
                <p>{selectedProduct.description}</p>
            </div>
            <div className='variant-count-2'>
                <p>Add-ons</p>
            </div>
        </div>

        <div className='variant-quantity'>
  <p className='quantity'>Quantity</p>
  <div className='variant-quantity-list'>
    {
      Array.isArray(selectedProduct.variants) && selectedProduct.variants.length > 0 ? (
        selectedProduct.variants.map(variant => (
          variant.sizes.map((size, index) => (
            <React.Fragment key={variant.id + index}> {/* Fragment with a key to avoid wrapping in unnecessary elements */}
              <div className='variant-quantity-size'>
                
                  <div className='variant-quantity-size-1'>
                      <div className='hii'>
                        <input type="radio" name={variant.name} value={size.size} />
                        <p className='variant-name'>{variant.name}({size.size})</p>
                      </div>
                  </div>

                  <div className='variant-quantity-size-2'>
                        <p>{size.price}</p>
                  </div>
              </div>
              <hr />
            </React.Fragment>
          ))
        ))
      ) : (
        <p>No variants available</p>
      )
    }
  </div>
</div>


</div>


<div className='variant-bottom'>
        <div className='variant-total'>
            <p>Item total</p>
            <p className='variant-total-amount'>SAR 4,100.00</p>
        </div>
        <div className='variant-order'>
            <div className='variant-order-count'>
                      <p>-</p>
                      <p>{selectedProduct.qty}</p>
                      <p>+</p>
            </div>
            <div className='add-to-order' onClick={()=>handleAdd(selectedProduct)}> Add to order</div>
        </div>
</div>

     
    </div>

  )
}

export default Variant