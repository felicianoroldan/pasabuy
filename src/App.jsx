import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Groceries from "./pages/Groceries"
import Medicines from "./pages/Medicines"
import Greenwich from "./pages/Greenwich"
import Jollibee from "./pages/Jollibee"



function App() {


  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About />} />
          <Route path="/groceries" element={ <Groceries />} />
          <Route path="/medicines" element={ <Medicines />} />
          <Route path="/greenwich" element={ <Greenwich />} />
          <Route path="/jollibee" element={ <Jollibee />} />
        </Routes>
      </BrowserRouter>
      <div className="mt-3">
      <Footer />
      </div>
    </>
  )
}

export default App
