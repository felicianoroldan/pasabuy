import React from 'react';
import Navbar from './Navbar';
import "/src/style/home.scss";
import Pasabuy from "/src/assets/photos/Pasabuy.png";
import Jollibee from "/src/assets/photos/Jollibee.jpg";
import seveneleven from "/src/assets/photos/seveneleven.png";
import Bread_Beans from "/src/assets/photos/Bread_Beans.jpg";
import burger from "/src/assets/photos/burger.jpg";
import cake from "/src/assets/photos/cake.png";
import greenwich from "/src/assets/photos/greenwich.jpg";
import icecream from "/src/assets/photos/icecream.jpg";
import icylicious1 from "/src/assets/photos/icylicious1.jpg";
import itc from "/src/assets/photos/itc.png";
import Pizza from "/src/assets/photos/Pizza.jpg";
import puregold from "/src/assets/photos/puregold.jpg";
import sisig from "/src/assets/photos/sisig.jpg";
import sm from "/src/assets/photos/sm.jpg";
import shawarma from "/src/assets/photos/shawarma.jpg";
import sushi from "/src/assets/photos/sushi.jpg";
import KSTD from "/src/assets/photos/KSTD.jpg";
import Manginasal from "/src/assets/photos/Manginasal.jpg";
import { Link } from 'react-router-dom';









function Home() {
  return (
    <>
    <Navbar/>
    <div className='landing-background'>
      <div className="card text-bg-dark">
        <img src={Pasabuy} alt="" className='landing-photo opacity-75' height="600vh"/>
        {/* <div className="card-img-overlay">
          <h5 className="card-title text-center opendel mt-5">OPEN EVERYDAY</h5>
          <p className="card-text text-center opendel">For Deliviries <span className='time'>from 9am-7pm</span></p>
        </div> */}
      </div>
      <h5 className='mt-4 ms-2 fw-bold'>Popular Restaurants</h5>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
               <Link to="/greenwich" className='storenamedecoration'>
                <img src={greenwich} className="d-block w-100 rounded-2" alt="Greenwich-Photo" height="120vh"/>
                <p className='text-center'><span className='storeName fw-bold'>Greenwich-Iba</span></p>
               </Link>
              </div>
              <div className="col-4">
               <a href="https://www.facebook.com/pages/Jollibee-IbaZambales-branch/174916829262529" className='storenamedecoration'>
                <img src={Jollibee} className="d-block w-100 rounded-2" alt="Jollibee-Photo" height="120vh"/> 
                <p className='text-center'><span className='storeName fw-bold'>Jollibee-Iba</span></p>
               </a>             
              </div>
              <div className="col-4">
               <a href="#" className='storenamedecoration'>
                <img src={KSTD} className="d-block w-100 rounded-2" alt="KSTD-Photo" height="120vh"/> 
                <p className='text-center'><span className='storeName fw-bold'>KSTD</span></p>
               </a>                  
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
              <a href="#" className='storenamedecoration'>
                <img src={Bread_Beans} className="d-block w-100 rounded-2" alt="..." height="120vh"/>
                <p className='text-center'><span className='storeName'>Bread & Beans-Iba</span></p>
               </a>  
              </div>
              <div className="col-4">
               <img src={Jollibee} className="d-block w-100 rounded-2" alt="..." height="120vh"/> 
               <p className='text-center'><span className='storeName'>Jollibee-Iba-Iba</span></p>             
              </div>
              <div className="col-4">
               <img src={Manginasal} className="d-block w-100 rounded-2" alt="..." height="120vh"/> 
               <p className='text-center'><span className='storeName'>Mang-Inasal</span></p>             
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
               <img src={Bread_Beans} className="d-block w-100 rounded-2" alt="..." height="120vh"/>
               <p className='text-center'><span className='storeName'>Bread & Beans-Iba</span></p>
              </div>
              <div className="col-4">
               <img src={Jollibee} className="d-block w-100 rounded-2" alt="..." height="120vh"/> 
               <p className='text-center'><span className='storeName'>Jollibee-Iba-Iba</span></p>             
              </div>
              <div className="col-4">
               <img src={KSTD} className="d-block w-100 rounded-2" alt="..." height="120vh"/> 
               <p className='text-center'><span className='storeName'>KSTD</span></p>             
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
               <img src={Bread_Beans} className="d-block w-100 rounded-2" alt="..." height="120vh"/>
               <p className='text-center'><span className='storeName'>Bread & Beans-Iba</span></p>
              </div>
              <div className="col-4">
               <img src={Jollibee} className="d-block w-100 rounded-2" alt="..." height="120vh"/> 
               <p className='text-center'><span className='storeName'>Jollibee-Iba</span></p>             
              </div>
              <div className="col-4">
               <img src={KSTD} className="d-block w-100 rounded-2" alt="..." height="120vh"/> 
               <p className='text-center'><span className='storeName'>KSTD</span></p>             
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h5 className='mt-4 ms-2 fw-bold'>Groceries</h5>
      <div id="carouselExample-1" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-3">
               <img src={seveneleven} className="d-block w-100 rounded-3" alt="..." height="90vh"/>
               <p className='text-center'><span className='storeName'>7/11-Iba</span></p>
              </div>
              <div className="col-3">
               <img src={sm} className="d-block w-100 rounded-3" alt="..." height="90vh"/> 
               <p className='text-center'><span className='storeName'>SM-Iba</span></p>             
              </div>
              <div className="col-3">
               <img src={puregold} className="d-block w-100 rounded-3" alt="..." height="90vh"/> 
               <p className='text-center'><span className='storeName'>PureGold</span></p>             
              </div>
              <div className="col-3">
               <img src={itc} className="d-block w-100 rounded-3" alt="..." height="90vh"/> 
               <p className='text-center'><span className='storeName'>ITC</span></p>             
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
               <img src={seveneleven} className="d-block w-100 rounded-3" alt="..." height="90vh"/>
               <p className='text-center'><span className='storeName'>7/11-Iba</span></p>
              </div>
              <div className="col-3">
               <img src={sm} className="d-block w-100 rounded-3" alt="..." height="90vh"/> 
               <p className='text-center'><span className='storeName'>SM-Iba</span></p>             
              </div>
              <div className="col-3">
               <img src={puregold} className="d-block w-100 rounded-3" alt="..." height="90vh"/> 
               <p className='text-center'><span className='storeName'>PureGold</span></p>             
              </div>
              <div className="col-3">
               <img src={itc} className="d-block w-100 rounded-3" alt="..." height="90vh"/> 
               <p className='text-center'><span className='storeName'>ITC</span></p>             
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample-1" data-bs-slide="prev">
          <span className="carousel-control-prev" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample-1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h5 className='mt-4 ms-2 fw-bold'>Cuisines</h5>
      <div id="carouselExample-2" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-3">
               <img src={icylicious1} className="d-block w-75 ms-3 rounded-3" alt="..." height="60vh"/>
               <p className='text-center'><span className='storeName'>Milk Tea</span></p>
              </div>
              <div className="col-3">
               <img src={Pizza} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Pizza</span></p>             
              </div>
              <div className="col-3">
               <img src={burger} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Burger</span></p>             
              </div>
              <div className="col-3">
               <img src={cake} className="d-block w-75 ms-2 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Cakes</span></p>             
              </div>
            </div>
            <div className="row">
              <div className="col-3">
               <img src={shawarma} className="d-block w-75 ms-3 rounded-3" alt="..." height="60vh"/>
               <p className='text-center'><span className='storeName'>Shawarma</span></p>
              </div>
              <div className="col-3">
               <img src={sisig} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Sisig</span></p>             
              </div>
              <div className="col-3">
               <img src={sushi} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Sushi</span></p>             
              </div>
              <div className="col-3">
               <img src={icecream} className="d-block w-75 ms-2 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Ice Cream</span></p>             
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
               <img src={icylicious1} className="d-block w-75 ms-3 rounded-3" alt="..." height="60vh"/>
               <p className='text-center'><span className='storeName'>Milk Tea</span></p>
              </div>
              <div className="col-3">
               <img src={Pizza} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Pizza</span></p>             
              </div>
              <div className="col-3">
               <img src={burger} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Burger</span></p>             
              </div>
              <div className="col-3">
               <img src={cake} className="d-block w-75 ms-2 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Cakes</span></p>             
              </div>
            </div>
            <div className="row">
              <div className="col-3">
               <img src={shawarma} className="d-block w-75 ms-3 rounded-3" alt="..." height="60vh"/>
               <p className='text-center'><span className='storeName'>Shawarma</span></p>
              </div>
              <div className="col-3">
               <img src={sisig} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Sisig</span></p>             
              </div>
              <div className="col-3">
               <img src={sushi} className="d-block w-75 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Sushi</span></p>             
              </div>
              <div className="col-3">
               <img src={icecream} className="d-block w-75 ms-2 rounded-3" alt="..." height="60vh"/> 
               <p className='text-center'><span className='storeName'>Ice Cream</span></p>             
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample-2" data-bs-slide="prev">
          <span className="carousel-control-prev" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample-2" data-bs-slide="next">
          <span className="carousel-control-next-icon mb-4" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}

export default Home