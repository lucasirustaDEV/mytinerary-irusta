import React from 'react'
import SiteLink from '../SiteLink/SiteLink';
import sitelinks from "../../data/sitelinks.js"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
      <p className="col-md-4 mb-0 myt">&copy; 2023 MyTinerary</p>
      <ul className="nav col-md-4 justify-content-end">

        {sitelinks.map((slink) => (
          <SiteLink key={slink.id} slink={slink} />
        ))}

      </ul>
    </footer>
  )
}

export default Footer
