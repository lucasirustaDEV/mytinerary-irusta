import React from 'react'
import './noresults.css'

const NoResults = ({ message }) => {
  return (
    <section className="py-5 text-center container no-results">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">{ message }</h1>
            </div>
        </div>
    </section>
  )
}

export default NoResults