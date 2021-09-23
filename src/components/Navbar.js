import React,{ useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  const [show,setShow] = useState(false);
  const handleClick = () =>{
    return(
      setShow(!show)
    )
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={handleClick}>
            <img className="img-fluid" src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu" onClick={handleClick}>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
