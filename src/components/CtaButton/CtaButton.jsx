import React from 'react'
import "./ctabutton.css"
import { Link as Anchor } from "react-router-dom"

const CtaButton = ( props ) => {
  const { slink, title } = props
  return (
    <Anchor className="cta-button" to={slink}>{title}</Anchor>
  )
}

export default CtaButton