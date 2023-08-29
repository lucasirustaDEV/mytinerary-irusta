import React from 'react'
import { useState, useEffect } from "react"

const ItineraryCard = ({ itinerary }) => {
  const [showMore, setShowMore] = useState(false)

  const toggleMoreInfo = () => {
    setShowMore(!showMore)
  }

  return (
/*     <div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">View more</a>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div> */
    <div className="card-horizontal">
      <div className="card-content">
        <h2>Título</h2>
        <p>{itinerary.description}</p>
        {showMore && (
          <div className="more-info">
            <p>Más datos...</p>
          </div>
        )}
        <button className="btn btn-primary" type="button" onClick={toggleMoreInfo}>
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  )
  
}

export default ItineraryCard