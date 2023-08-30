import React from 'react'
import { useState, useEffect } from "react"
import NoResults from '../../components/NoResults/NoResults'
import './itinerarycard.css'
import Hashtag from '../Hashtag/Hashtag'
import Price from '../Price/Price'

const ItineraryCard = ({ itinerary }) => {
  const [showMore, setShowMore] = useState(false)

  const [liked, setLiked] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore)
  }

  const toggleLike = () => {
    setLiked(!liked);
  }

  return (
    <div className="card-horizontal">
      <div className="card-content">
        <h3>{itinerary.description}</h3>
        <Price price={itinerary.price}/>
        <p>Duration: {itinerary.duration}</p>
        <div className={`like-button ${liked ? 'liked' : ''}`}>
          <button onClick={toggleLike} className="like-button-icon">
            {liked ? '❤️' : '🤍'}
          </button>
          <span className="like-button-text">{liked ? itinerary.likes + 1 : itinerary.likes }</span>
        </div>
        <Hashtag hashtags={itinerary.hashtag}/>
        {showMore && (
          <NoResults message={'Under Construction'}/>
        )}
        <button className="btn btn-primary" type="button" onClick={toggleMoreInfo}>
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  )
  
}

export default ItineraryCard