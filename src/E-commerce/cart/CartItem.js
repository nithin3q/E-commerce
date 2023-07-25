import React, { useContext } from 'react';
import { ShopContext } from '../Context/Shopcontext';

export const CartItem = (nithin) => {
  const { id, productName, price, productImage } = nithin.data;
  const { cartitems, addToCart, removeFromCart, updateCartItemsCount } = useContext(ShopContext);

  const handleInputChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
    updateCartItemsCount(newAmount, id);
  };

  return (
    <div className="d-flex align-items-center border-bottom mb-3 py-3 ">
      <img src={productImage} alt={productName} width="50px" className="mr-5 mx-auto" />
      <div className="flex-grow-6 mx-auto">
        <div>{productName}</div>
        <div className="text-muted">₹ {price}</div>
      </div>
      <div className="d-flex align-items-center mx-auto">
        <button
          className="btn btn-sm btn-outline-danger mx-2"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="form-control w-50 text-center mx-2"
          type="text" // Use type="text" to display text in the input field
          value={cartitems[id] + ' items'}
          onChange={handleInputChange} // Call handleInputChange on change
        />
        <button
          className="btn btn-sm btn-outline-success mx-2"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};
