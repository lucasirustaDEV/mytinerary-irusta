import React from 'react'

const CityCard = ({ destination }) => {
  /* console.log(destination) */
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <img className="bd-placeholder-img card-img-top" alt="" src={destination.image}/>
        <div className="card-body">
            <h4 className="card-title">{destination.name}</h4>
            <p className="card-text">{destination.text}</p>
            <p><a className="btn btn-lg btn-primary" href="#">Go!</a></p>
        </div>
      </div>
    </div>
  )
}

export default CityCard