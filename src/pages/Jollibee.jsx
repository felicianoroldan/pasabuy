import React, { useEffect } from "react";
import "/src/style/jollibee.scss";
import chickenjoy from "/src/assets/photos/chickenjoy.jpg";
import { AiFillStar } from "react-icons/ai";
import { TbCurrencyPeso } from "react-icons/tb";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";




function Jollibee() {
  useEffect(() => {
    document.title = "jollibee";
  }, []);

  return (
    <>
      <div>
        <Link to="/">
          <MdOutlineArrowBack size={20} className="ms-3 fixed-top backicon" />
        </Link>
        <div className="conteiner">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conteiner">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-10 d-flex justify-content-center">
                  <button className="mb-2 btn custom-btn"><span className="addToCart-J">Add to cart</span></button>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conteiner">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conteiner">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conteiner">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-bg-white shad">
                <img src={chickenjoy} className="card-img" alt="..." />
                <h5 className="card-title-j fw-bold card-img-overlay">
                  <span className="bg-white rounded-2">
                    6pc Chickenjoy Solo
                  </span>
                </h5>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title-j">
                      <span className="fw-bold ">
                        <TbCurrencyPeso size={20} className="" />
                        350
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center card-title-j">
                      <AiFillStar size={14} className="mb-1 iconstar" />
                      <span className="fw-semibold">4.99</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-6 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <AiFillMinusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="jAddto ms-2 mt-1 text-center">2</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <AiFillPlusCircle
                            size={20}
                            className="aicircle jAddto"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10 d-flex justify-content-center">
                    <button className="mb-2 btn"><span className="addToCart-J">Add to cart</span></button>
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

export default Jollibee;
