import React from 'react'
import "./ctabutton.css"

const CtaButton = ( props ) => {
    const { slink, title } = props
  return (
    <a href={slink} className="cta-button">{title}</a>
  )
}

export default CtaButton