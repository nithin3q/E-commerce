import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/Shopcontext';

export const Product = (nithin) => {
  const { id, productName, price, productImage } = nithin.value;
  const { cartitems, addToCart } = useContext(ShopContext);
  const cartItemsAmount = cartitems[id];

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000); // Hide the popup after 2 seconds
  };

  return (
    <div >
    <div className="card mb-3 shadow-sms" style={{ width: '18rem', maxHeight: '55rem', transition: 'box-shadow 0.5s' }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '20rem' }}>
        {/* 'd-flex' applies a flex display, 'justify-content-center' horizontally centers the content,
            'align-items-center' vertically centers the content */}
        <img src={productImage} className="card-img-top" style={{ width: '150px' }} alt={productName} />
      </div>
      <div className="card-body">
        <hr />
        <h5 className="card-title">{productName}</h5>
        <div className="card-text">₹ {price}</div>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          add to cart{cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
        </button>
        {showPopup && <div style={{ marginTop: '5px', color: 'green' }}>Item added to cart!</div>}
      </div>
      
    </div>
    </div>
  );
};


