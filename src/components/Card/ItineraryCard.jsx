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
    <section className='mb-3'>
      <div className="card itinerary-card">
        <h5 className="card-header text-center">{itinerary.title}</h5>
        <div className="card-body p-0">
          <div className='itinerary-content'>
            <div className='profile p-1'>
              <img className="rounded-circle" alt={itinerary.provider} src={itinerary.profile_pic} />
              <p className="card-text">{itinerary.provider}</p>
            </div>
            <p className="card-text">{itinerary.description}.</p>
          </div>
          <div className='d-flex justify-content-between align-items-center itinerary-crt'>
            <Hashtag hashtags={itinerary.hashtag} />
            <p className='align-self-center ms-3'>Duration: {itinerary.duration}</p>
            <Price price={itinerary.price} />
            <div className={`like-button ${liked ? 'liked' : ''}`}>
              <span className="like-button-text">{liked ? itinerary.likes + 1 : itinerary.likes}</span>
              <button onClick={toggleLike} className="like-button-icon">
                {liked ? '❤️' : '🤍'}
              </button>              
            </div>
          </div>
          <div className='card-footer text-center'>
            {showMore && (
              <NoResults message={'Under Construction'} />
            )}
            <button className="btn btn-primary" type="button" onClick={toggleMoreInfo}>
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>
    </section>

  )
  
}

export default ItineraryCard