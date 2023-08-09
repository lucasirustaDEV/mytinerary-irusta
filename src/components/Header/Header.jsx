import React from 'react'
import "./header.css";
import SiteLink from '../SiteLink/SiteLink';
import sitelinks from "../../data/sitelinks.js"

/* const siteLink = [
  { id: "1", title: "Home", slink: "link", active: true },
  { id: "1", title: "Cities", slink: "link", active: false },
] */

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">My Tinerary</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

  
              <div className="d-flex ms-auto">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

                    {sitelinks.map((slink) => (
                      <SiteLink slink={slink} />
                    ))}

                    {/* <li className="nav-item"><a href="#" className="nav-link px-2">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2">Cities</a></li> */}
                    <li><button className="btn btn-success"><i className="fa fa-user"></i>  Login</button></li>
                  </ul>

              </div>
  
          </div>
      </div>
  </nav>
  </header>
  )
}

export default Header
