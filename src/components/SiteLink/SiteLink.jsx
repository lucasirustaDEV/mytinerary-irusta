import React from 'react'
import "./sitelink.css"
import { Link as Anchor } from "react-router-dom"
import { NavLink } from 'react-router-dom'

const SiteLink = ({ slink }) => {
  return (
    <li className="nav-item">
      {/* {<Anchor className="nav-link px-2" to={slink.slink}>{slink.title}</Anchor>} */}
      <NavLink className={({ isActive }) =>
                isActive
                    ? "nav-link px-2 active"
                    : "nav-link px-2"
      } to={slink.slink}>{slink.title}</NavLink>
    </li>
    
  )
}

export default SiteLink