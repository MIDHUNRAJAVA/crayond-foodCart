import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Cart from './Cart'
import Shop from './Shop'
import Catalog from './Catalog'
import Variant from './Variant'
import data from './data'

const App = () => {
  const [cart,setCart] = useState([])
  const [variant,setVariant] = useState(false);
  const [shopView, setShopView] = useState('shop');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to handle click on the book icon in Cart to switch to catalog view
    const handleCatalogClick = () => {
        setShopView('catalog');
    };

    // Function to handle click on a product in Catalog to switch to variant view
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShopView('variant');
        // console.log(product)
    };
  return (
    <div className='container'>

          <div className='navigation-bar'>
              <Navbar/>
              {console.log("From nav")}
          </div>
          
          <div className="cart">
                <Cart cart={cart} setCart={setCart} setShopView={setShopView}  />
              {console.log("From cart")}

            </div>

            <div className="shop">
                {shopView === 'shop' && <Shop />}
                {shopView === 'catalog' && <Catalog  setShopView={setShopView} handleProductClick={handleProductClick} />}
                {shopView === 'variant' &&  <Variant setShopView={setShopView} selectedProduct={selectedProduct}  cart={cart} setCart={setCart}/>}
            </div>
        


          
    </div>
  )
}

export default App