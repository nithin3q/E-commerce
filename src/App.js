import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navbar } from './E-commerce/Navbar'
import { Shop } from './E-commerce/shop/Shop'
import { Cart } from './E-commerce/cart/Cart'
import { ShopContextProvider } from './E-commerce/Context/Shopcontext'
import { Checkout } from './E-commerce/cart/Checkout'
function App() {  
  return (
    <div>
      <ShopContextProvider>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path="/Checkout" element={<Checkout />} />
            </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  )
}

export default App