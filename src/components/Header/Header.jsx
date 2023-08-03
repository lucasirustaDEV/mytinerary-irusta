import React from 'react'

export default function Header() {
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Cities</a></li>
                      <li><button className="btn btn-success"><i className="fa fa-user"></i>  Login</button></li>
                    </ul>

                </div>
    
            </div>
        </div>
    </nav>
    </header>
  )
}
