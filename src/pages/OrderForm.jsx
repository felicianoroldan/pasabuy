import React, { useEffect } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '/src/style/orderForm.scss';
import greenwich from '/src/assets/photos/greenwich.jpg';
import { TbCurrencyPeso } from 'react-icons/tb';
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";





function OrderForm() {

  useEffect(() => {
    document.title = "orderForm"
  }, []);

  return (
    <>
      <Link to="/greenwich">
        <MdOutlineArrowBack size={20} className="ms-4 fixed-top backicon" />
      </Link>
      <div>
        <form action="">
        <div className="container-fluid mt-2">
          <div className="col">
            <div className="col-12 d-flex justify-content-center">
              <img src={greenwich} alt="" width="350px" height="170px" className='rounded-2'/>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <p className='fw-bold'><span className='fontfamily'>Pizza Hut w/ Chickenjoy</span></p>
                  </div>
                  <div className="col-6">
                    <p className='text-end fw-semibold fontfamily'>from <TbCurrencyPeso size={18} className="mb-1" />350.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <h5 className='fw-semibold'><span className='fontfamily'>Extra</span></h5>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <p className='w-50 rounded-3 optional text-center'><span className='fw-semibold'>Optional</span></p>
              </div>
            </div>
            <p className='select'><span className='select'>Select up to 4</span></p>
          </div>
          <div className="form-check">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Add Spicy
                  </label>
                </div>
                <div className="col-6 text-end">+ <TbCurrencyPeso size={15} className="mb-1" />6.00</div>
              </div>
            </div>
          </div>
          <div className="form-check">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Ketchup
                  </label>
                </div>
                <div className="col-6 text-end">+ <TbCurrencyPeso size={15} className="mb-1" />4.00</div>
              </div>
            </div>
          </div>
          <div className="form-check">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Hot sauce
                  </label>
                </div>
                <div className="col-6 text-end">+ <TbCurrencyPeso size={15} className="mb-1" />5.00</div>
              </div>
            </div>
          </div>
          <div className="form-check">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Apple Pie
                  </label>
                </div>
                <div className="col-6 text-end">+ <TbCurrencyPeso size={15} className="mb-1" />35.00</div>
              </div>
            </div>
          </div>
          <p className='mt-4 fw-semibold ms-2'>Frequently bought together</p>
          <div className="form-check">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Coke large
                  </label>
                </div>
                <div className="col-6 text-end">+ <TbCurrencyPeso size={15} className="mb-1" />57.00</div>
              </div>
            </div>
          </div>
          <div className="form-check">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Spicy Chicken (8pcs)
                  </label>
                </div>
                <div className="col-6 text-end">+ <TbCurrencyPeso size={15} className="mb-1" />600.00</div>
              </div>
            </div>
          </div>
          <p className='mt-5 notes ms-2'>If this product is not available please call me</p>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label notes fw-semibold ms-2">Cp # & Notes</label>
            <textarea className="form-control notes " id="exampleFormControlTextarea1" rows="3"></textarea>
          </div> 
        </div>
        <div className="text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-5 mt-2">
              <div className="row">
                <div className="col-4">
                  <p>
                    <AiFillMinusCircle size={20} className="aicircle" />
                  </p>
                </div>
                <div className="col-4 text-center">
                  <span className="gprice ms-1">2</span>
                </div>
                <div className="col-4">
                  <p>
                    <AiFillPlusCircle size={20} className="aicircle" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <button className="rounded-2 w-100 btn">
                <span className="gAddTo">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default OrderForm