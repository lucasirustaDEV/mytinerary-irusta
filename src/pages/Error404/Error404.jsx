import React from 'react'
import CtaButton from '../../components/CtaButton/CtaButton'
import './error404.css'

const Error404 = () => {
  return (
    <section className="background-container">
    <div className="welcome-container">
      <h1>We went too far...</h1>
      <CtaButton title="Return to the site!" slink="#"/>
    </div>
  </section>
  )
}

export default Error404