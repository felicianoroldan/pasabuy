import React, { useEffect } from 'react';
import '../style/shoppingcart.scss';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  useEffect(() => {
    document.title = 'Shopping Cart';
  }, []);

  return (
    <div className="text-end cartitem me-5 fixed-top">
      <a href="#" className='itemquantity'>
        <BsCart4 size={30} className="me-3 cartcolor" />
        <span className="fw-bold cartcolor">0</span>
      </a>
    </div>
  );
}

export default ShoppingCart;