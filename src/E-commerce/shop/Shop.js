import React from 'react';
import {PRODUCTS} from '../../Products'
import { Product } from './Product';
import './Shop.css'
export const Shop = () => {
  return (
    <div className='container mt-5' style={{paddingTop: '5px' }}>
        <div className='text-center mt-3'>
           
               <h1>Tech shop</h1>

        </div>

        <div className="d-flex flex-wrap justify-content-center">{PRODUCTS.map((product)=>
        <div className="product-card" style={{margin:'10px'}}>
        <Product value={product}/></div>
        )}</div>
    </div>
  )
}
