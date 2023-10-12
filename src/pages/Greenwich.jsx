import React, { useEffect } from 'react';
import "/src/style/greenwich.scss";
import greenwich from "/src/assets/photos/greenwich.jpg";
import { AiFillStar } from "react-icons/ai";
import { TbCurrencyPeso } from "react-icons/tb";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";




function Greenwich() {

  useEffect(() => {
    document.title = "greenwich";
  }, []);
 

  return (
    <>
    <div className="d-flex justify-content-center mt-2">
      <div className="row row-cols-1 row-cols-md-3 g-4 cardsize"> 
        <div className="col">
          <div className="h-75 ">
            <img src={greenwich} className="card-img-top img-fluid imgsize h-75 rounded-2" alt="..."/>
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title">Pizza Hut -Iba</h5>
                </div>
                <div className="col-4">
                  <p className='text-end'>
                    <AiFillStar size={17} className='mb-1 iconstar'/><span className='fw-semibold'>4.99</span>
                  </p>
                </div>
              </div>
              <p className="card-price"><span className='text-decoration-line-through'>
                <TbCurrencyPeso size={20} className='mb-1'/>500</span>
                <span className='fw-semibold ms-1'><TbCurrencyPeso size={20} className='mb-1'/>350</span>
              </p>
              <div className="row">
                <div className="col-7">
                  <button className='rounded-2 w-100 btn'>Add to card</button>
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col-4">
                      <p><AiFillMinusCircle size={30} className='aicircle'/></p>
                    </div>
                    <div className="col-4 text-center">
                      <p className=''>2</p>
                    </div>
                    <div className="col-4">
                    <p><AiFillPlusCircle size={30} className='aicircle'/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5 maincard-1">
          <div className="h-75 ">
            <img src={greenwich} className="card-img-top img-fluid imgsize h-75 rounded-2" alt="..."/>
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title">Pizza Hut -Iba</h5>
                </div>
                <div className="col-4">
                  <p className='text-end'>
                    <AiFillStar size={17} className='mb-1 iconstar'/><span className='fw-semibold'>4.99</span>
                  </p>
                </div>
              </div>
              <p className="card-price"><span className='text-decoration-line-through'>
                <TbCurrencyPeso size={20} className='mb-1'/>500</span>
                <span className='fw-semibold ms-1'><TbCurrencyPeso size={20} className='mb-1'/>350</span>
              </p>
              <div className="row">
                <div className="col-7">
                  <button className='rounded-2 w-100 btn'>Add to card</button>
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col-4">
                      <p><AiFillMinusCircle size={30} className='aicircle'/></p>
                    </div>
                    <div className="col-4 text-center">
                      <p className=''>2</p>
                    </div>
                    <div className="col-4">
                    <p><AiFillPlusCircle size={30} className='aicircle'/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5 maincard-1">
          <div className="h-75 ">
            <img src={greenwich} className="card-img-top img-fluid imgsize h-75 rounded-2" alt="..."/>
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title">Pizza Hut -Iba</h5>
                </div>
                <div className="col-4">
                  <p className='text-end'>
                    <AiFillStar size={17} className='mb-1 iconstar'/><span className='fw-semibold'>4.99</span>
                  </p>
                </div>
              </div>
              <p className="card-price"><span className='text-decoration-line-through'>
                <TbCurrencyPeso size={20} className='mb-1'/>500</span>
                <span className='fw-semibold ms-1'><TbCurrencyPeso size={20} className='mb-1'/>350</span>
              </p>
              <div className="row">
                <div className="col-7">
                  <button className='rounded-2 w-100 btn'>Add to card</button>
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col-4">
                      <p><AiFillMinusCircle size={30} className='aicircle'/></p>
                    </div>
                    <div className="col-4 text-center">
                      <p className=''>2</p>
                    </div>
                    <div className="col-4">
                    <p><AiFillPlusCircle size={30} className='aicircle'/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Greenwich