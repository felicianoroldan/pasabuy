import React, { useEffect } from 'react';
import '../style/shoppingcart.scss';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  useEffect(() => {
    document.title = 'ShoppingCart';
  }, []);

  return (
    <>
      <div className="text-end cartitem fixed-top">
        <Link to="/viewcart" className='itemquantity'>
          <BsCart4 size={20} className="" />
          <span className="fw-semibold cartcolor ms-1">1</span>
        </Link>
      </div>
    </>
  );
}

export default ShoppingCart;