import React from 'react'
import "./sitelink.css"
import { Link as Anchor } from "react-router-dom"

const SiteLink = ({ slink }) => {
  return (
    <li className="nav-item">
      <Anchor className="nav-link px-2" to={slink.slink}>{slink.title}</Anchor>
    </li>
    
  )
}
{/* <li className="nav-item"><a href={slink.slink} className="nav-link px-2">{slink.title}</a></li> */}
export default SiteLink