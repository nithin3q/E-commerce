import React, { useContext } from 'react';
import { ShopContext } from '../Context/Shopcontext';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { cartitems, getTotalCartAmount, updateCartItemsCount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Simulate the checkout process
    // In a real-world scenario, you would implement the actual checkout logic, including payment processing, etc.

    // Clear the cart items after successful checkout
    for (const itemId in cartitems) {
      updateCartItemsCount(0, itemId);
    }

    // Show a confirmation message
    alert('Order placed successfully! Thank you for shopping.');

    // Redirect to a "Thank You" or any other success page
    navigate('/cart'); // Replace '/thankyou' with the actual success page route
  };

  return (
    <div className="container mt-5" style={{paddingTop: '5px' }}>
      <h1 className="text-center mt-5">Checkout</h1>
      {totalAmount > 0 ? (
        <div className="text-center mt-3">
          <p>Subtotal: ₹ {totalAmount}</p>
          <button className="btn btn-primary mx-2" onClick={() => navigate('/cart')}>
            Back to Cart
          </button>
          <button className="btn btn-success mx-2" onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      ) : (
        <h1 className="text-center mt-5">Your cart is empty</h1>
      )}
    </div>
  );
};
