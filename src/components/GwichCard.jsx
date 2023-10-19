import React from 'react';
import "/src/style/greenwich.scss";
import greenwich from "/src/assets/photos/greenwich.jpg";
import { TbCurrencyPeso } from "react-icons/tb";
import { Link } from 'react-router-dom';

function GwichCard() {
  return (
    <>

      <div className="gMaincard mb-3 mt-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-6 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Hut w/ ChickenJoy</h5>
              <p className="card-price mt-1">
                <span className="text-decoration-line-through">
                  <TbCurrencyPeso size={20} className="mb-1" />
                  500
                </span>
                <span className="fw-semibold ms-1">
                  <TbCurrencyPeso size={20} className="mb-1" />
                  350
                </span>
              </p>
              <div className="text-center">
               <Link to="/orderform"><button className='btn'><span className='view'>View</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-6 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Hut w/ ChickenJoy</h5>
              <p className="card-price mt-1">
                <span className="text-decoration-line-through">
                  <TbCurrencyPeso size={20} className="mb-1" />
                  500
                </span>
                <span className="fw-semibold ms-1">
                  <TbCurrencyPeso size={20} className="mb-1" />
                  350
                </span>
              </p>
              <div className="text-center">
               <Link to="/orderform"><button className='btn'><span className='view'>View</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-6 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq w/ ChickenJoy</h5>
              <p className="card-price mt-1">
                <span className="text-decoration-line-through">
                  <TbCurrencyPeso size={20} className="mb-1" />
                  500
                </span>
                <span className="fw-semibold ms-1">
                  <TbCurrencyPeso size={20} className="mb-1" />
                  350
                </span>
              </p>
              <div className="text-center">
               <Link to="/orderform"><button className='btn'><span className='view'>View</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default GwichCard