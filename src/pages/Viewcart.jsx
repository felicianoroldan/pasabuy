import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import '../style/viewcart.scss';
import greenwich from "/src/assets/photos/greenwich.jpg";
import { TbCurrencyPeso } from 'react-icons/tb';




function Viewcart() {

  useEffect(() => {
    document.title = "viewcart"
  })
  return (
    <>
      <Link to="/">
          <MdOutlineArrowBack size={20} className="ms-4 fixed-top backicon" />
      </Link>
      <form action="">
        <p className='text-center mt-3 review fw-semibold'>Review your items</p>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-4">
              <select className="form-select" aria-label="Default select example">
                <option value>1</option>
                <option value="1">Remove</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="1">4</option>
                <option value="2">5</option>
                <option value="1">6</option>
                <option value="2">7</option>
                <option value="2">8</option>
                <option value="1">9</option>
                <option value="2">10</option>
              </select>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-6">
                  <img src={greenwich} alt=""className='rounded-2' width="50px"/>
                </div>
                <div className="col-6">
                  <p className='viewitem'>Pizza Hut w/ chickenjoy</p>
                </div>
              </div>
            </div>
            <div className="col-3 text-end viewamount"><TbCurrencyPeso size={15} className="mb-1" />350.00</div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-6">
             <p className='fw-semibold'>Total</p>
            </div>
            <div className="col-6">
            <div className="text-end fw-semibold"><TbCurrencyPeso size={15} className="mb-1" />5.00</div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
         <button className='btn'>Buy Now</button>
        </div>
      </form>
    </>
  )
}

export default Viewcart