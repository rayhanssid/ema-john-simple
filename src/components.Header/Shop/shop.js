/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/cart';

const shop = () => {
   
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div className="product-container">
    
            {
                products.map(pd => <Product
                    handleAddProduct = {handleAddProduct} 
                    product={pd}></Product>)
            }
            </div>
        <div className="cart-container"></div>
    
          <Cart cart={cart}></Cart>

        </div>
    );
};

export default shop;