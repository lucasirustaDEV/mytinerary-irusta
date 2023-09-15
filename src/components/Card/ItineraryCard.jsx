import React from 'react'
import { useState, useEffect } from "react"
import NoResults from '../../components/NoResults/NoResults'
import './itinerarycard.css'
import Hashtag from '../Hashtag/Hashtag'
import Price from '../Price/Price'
import { useDispatch, useSelector } from 'react-redux'
import { addToLikes, removeToLikes } from '../../redux/actions/citiesActions'
import { toast } from 'react-toastify'

const ItineraryCard = ({ itinerary }) => {

  const dispatch = useDispatch()
  const { likes } = useSelector(store => store.citiesReducers)
  const { user } = useSelector(store => store.authReducers)

  const [showMore, setShowMore] = useState(false)
  const [liked, setLiked] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore)
  }

  useEffect(() => {
    setLiked(likes.includes(itinerary._id))
  }, [likes, itinerary._id])

  const toggleLike = () => {
    setLiked(!liked)
    if(!liked){
      dispatch(addToLikes(itinerary._id))
    }else {
      dispatch(removeToLikes(itinerary._id))
    }
  }

  const advertLogin = () => {
    toast.warn("You have to sign in to like")
  }

  return (
    <section className='mb-3'>
      <div className="card itinerary-card">
        <h5 className="card-header text-center">{itinerary.title}</h5>
        <div className="card-body p-0">
          <div className='itinerary-content'>
            <div className='profile p-1'>
              <img className="rounded-circle" alt={itinerary.provider.name} src={itinerary.provider.profile_pic} />
              <p className="card-text">{itinerary.provider.name} {itinerary.provider.surname}</p>
            </div>
            <p className="card-text">{itinerary.description}.</p>
          </div>
          <div className='d-flex justify-content-between align-items-center itinerary-crt'>
            <Hashtag hashtags={itinerary.hashtag} />
            <p className='align-self-center duration-item'>Duration: {itinerary.duration}</p>
            <Price price={itinerary.price} />
            <div className={`like-button ${liked ? 'liked' : ''}`}>
              <span className="like-button-text">{liked ? itinerary.likes + 1 : itinerary.likes }</span>
              <button onClick={() => user.name ? toggleLike() : advertLogin()} className="like-button-icon">
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