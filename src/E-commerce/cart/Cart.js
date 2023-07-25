import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../Context/Shopcontext';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartitems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
const navigate=useNavigate()
  return (
    <div className="container mt-5" style={{paddingTop: '5px' }}>
      <h1 className="text-center mt-5">Your Cart Items</h1>
      <div className="cart">
        {PRODUCTS.map((Product) => {
          if (cartitems[Product.id] !== 0) {
            return <CartItem key={Product.id} data={Product} />;
          }
          return null;
        })}
      </div>
      {totalAmount>0 ?
      <div className="text-center mt-3">
        <p>Subtotal: ₹ {totalAmount}</p>
        <button className="btn btn-primary mx-2" onClick={()=>navigate('/')}>Continue Shopping</button>
        <button className="btn btn-success mx-2" onClick={()=>navigate('/Checkout')}>Checkout</button>
      </div>:<div className="text-center mt-3"><h1 className='text-center mt-5'>your cart is empty</h1>
      <button className="btn btn-primary mx-2 mt-3" onClick={()=>navigate('/')}>Back to Shopping</button></div>}
    </div>
  );
};
