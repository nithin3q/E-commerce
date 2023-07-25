import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark fixed-top" >
      <div class="container-fluid" data-bs-theme="dark">
        <Link to='/' class="navbar-brand text-white">Shopping</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav nav-pills ms-auto">
            <li class="nav-item">
              <Link to='/Cart' className='active nav-link'><i class="fa-solid fa-cart-shopping"></i> Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
