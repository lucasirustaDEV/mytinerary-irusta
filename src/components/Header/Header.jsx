import React from 'react'
import "./header.css";
import SiteLink from '../SiteLink/SiteLink';
import sitelinks from "../../data/sitelinks.js"
import { Link as Anchor } from "react-router-dom"
import { useSelector } from 'react-redux';
import store from '../../redux/store';

const Header = () => {

  const { user } = useSelector(store => store.authReducers)

  const handleSignOut = () => {}

  return (
    <header>
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">My Tinerary</a> */}
          <Anchor className="navbar-brand" to="/">My Tinerary</Anchor>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
              <div className="d-flex ms-auto">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 nav-pills">

                    {sitelinks.map((slink) => (
                      <SiteLink key={slink.id} slink={slink} />
                    ))}
                    {/* <li><button className="btn btn-success"><i className="fa fa-user"></i>  Login</button></li>
                      <li><button className="btn btn-success"><img src={user.profile_pic} alt={user.name} className='profile-circle'/>Login</button></li> */}



                        {user.name ? (
                          <button className="btn btn-danger" onClick={handleSignOut}>
                            <img src={user.profile_pic} alt={user.name} className='profile-circle'/>
                            Sign out
                          </button>
                        ) : (
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1 nav-pills">
                          <li>
                            <Anchor to="/signin">
                              <button className="btn btn-success">
                                Sign in
                              </button>
                            </Anchor>
                          </li>
                          <li>
                            <Anchor to="/signup">  
                              <button className="btn btn-success">
                                Register
                              </button>
                            </Anchor>
                          </li>
                        </ul>
                        )}


                  </ul>
              </div>
          </div>
      </div>
  </nav>
  </header>
  )
}

export default Header
