import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import"/src/style/greenwich.scss";
import greenwich from "/src/assets/photos/greenwich.jpg";
import { TbCurrencyPeso } from "react-icons/tb";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineArrowBack } from "react-icons/md";


function Greenwich() {
  useEffect(() => {
    document.title = "greenwich";
  }, []);

  return (
    <>
      <Link to="/">
        <MdOutlineArrowBack size={20} className="ms-4 fixed-top backicon" />
      </Link>
      <div className="gMaincard mb-3 mt-5">
        <div className="row">
          <div className="col-5 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq</h5>
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

              <div className="row">
                <div className="col-6">
                  <button className="rounded-2 w-100 btn">
                    <span className="gAddTo">Add to card</span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-4">
        <div className="row">
          <div className="col-5 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq</h5>
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

              <div className="row">
                <div className="col-6">
                  <button className="rounded-2 w-100 btn ">
                    <span className="gAddTo">Add to card</span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-4">
        <div className="row">
          <div className="col-5 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq</h5>
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

              <div className="row">
                <div className="col-6">
                  <button className="rounded-2 w-100 btn ">
                    <span className="gAddTo">Add to card</span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-4">
        <div className="row">
          <div className="col-5 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq</h5>
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

              <div className="row">
                <div className="col-6">
                  <button className="rounded-2 w-100 btn ">
                    <span className="gAddTo">Add to card</span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-4">
        <div className="row">
          <div className="col-5 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq</h5>
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

              <div className="row">
                <div className="col-6">
                  <button className="rounded-2 w-100 btn ">
                    <span className="gAddTo">Add to card</span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gMaincard mb-3 mt-4">
        <div className="row">
          <div className="col-5 col-md-4">
            <img
              src={greenwich}
              className="img-fluid rounded-2 ms-2"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Bbq</h5>
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

              <div className="row">
                <div className="col-6">
                  <button className="rounded-2 w-100 btn ">
                    <span className="gAddTo">Add to card</span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Greenwich;
