
import "/src/style/navbar.scss";
import sticker from "/src/assets/photos/sticker.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <> 
      <div>
      <nav className="navbar navbar-expand-lg navbody">
        <div className="container-fluid mb-3">
          <Link className="navbar-brand ms-3" to="/"><img src={sticker} alt="" width="70px"/> <span className="jessieWebsite fw-bold">Pasabuy Iba</span></Link>
          <button className="navbar-toggler me-3 bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse link-menu" id="navbarText">
            <span className="navbar-text ms-5">
              <ul className="navbar-nav me-4 mb-1 mb-lg-0 nav-container">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page"><span className="home navtextcolor ms-2">Home</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"><span className="ms-2 navtextcolor">About</span></Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="ms-2 navtextcolor">Store</span>
                  </Link>
                  <ul className="dropdown-menu overflow-auto">
                    <li><Link className="dropdown-item" to="/greenwich">Greenwich</Link></li>
                    <li><Link className="dropdown-item" to="/jollibee">Jollibee</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>
                    <li><Link className="dropdown-item" to="/">Mang-Inasal</Link></li>

                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Other Menu</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="ms-2 navtextcolor">Menus</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item " href="#">Breakfast Menu</a></li>
                    <li><a className="dropdown-item" href="#">Lunch Menu</a></li>
                    <li><a className="dropdown-item" href="#">Dinner Menu</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">other Menu</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/groceries"><span className="ms-2 navtextcolor">Groceries</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/medicines"><span className="ms-2 navtextcolor">Medicines</span></Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar