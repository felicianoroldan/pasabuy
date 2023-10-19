import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Groceries from "./pages/Groceries"
import Medicines from "./pages/Medicines"
import Greenwich from "./pages/Greenwich"
import Jollibee from "./pages/Jollibee"
import ShoppingCart from "./components/ShoppingCart"
import OrderForm from "./pages/OrderForm"
import Viewcart from "./pages/Viewcart"



function App() {


  return (
    <>
      <BrowserRouter>
        <div className="sticky-top">
        <Navbar />
        </div>
        <ShoppingCart />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About />} />
          <Route path="/groceries" element={ <Groceries />} />
          <Route path="/medicines" element={ <Medicines />} />
          <Route path="/greenwich" element={ <Greenwich />} />
          <Route path="/jollibee" element={ <Jollibee />} />
          <Route path="/shoppingcart" element={ <ShoppingCart />} />
          <Route path="/orderForm" element={ <OrderForm />} />
          <Route path="/viewcart" element={ <Viewcart />} />
        </Routes>
      </BrowserRouter>
      <div className="mt-2">
      <Footer />
      </div>
    </>
  )
}

export default App
