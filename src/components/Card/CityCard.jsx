import React from 'react'
import { Link as Anchor } from "react-router-dom"
import './citycard.css'

const CityCard = ({ destination }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100 city-card">
        {destination.itineraryIds.length > 0 && (
          <i className="fa fa-star favorite-icon" title='Available Itineraries!'></i>
        )}
        <img className="bd-placeholder-img card-img-top" alt={destination.name} src={destination.image}/>
        <div className="card-body">
            <h4 className="card-title crop-text-1">{destination.name}</h4>
            <p className="card-text crop-text-1">{destination.text}</p>
            <Anchor className="btn btn-lg btn-primary" to={'/city/' + destination._id}>Go!</Anchor>
        </div>
      </div>
    </div>
  )
}

export default CityCard