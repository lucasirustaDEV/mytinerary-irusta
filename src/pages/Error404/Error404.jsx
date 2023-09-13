import React from 'react'
import './error404.css'
import Banner from '../../components/Banner/Banner'
import CtaButton from '../../components/CtaButton/CtaButton'

const Error404 = () => {

  const bannerImg = "https://images.unsplash.com/photo-1612896008575-32623e0acb79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"

  return (
    <section>
      <Banner imageURL={bannerImg} height="80vh" />
      <div className="error-text">
        <h1>You went too far...</h1>
      </div>
      <div className='error-button'>
        <CtaButton  title="Let's get back together!" slink="/"/>
      </div>
    </section>
  )
}

export default Error404