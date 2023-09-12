import React from 'react'
import './city.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Banner from '../../components/Banner/Banner.jsx'
import ItineraryCard from '../../components/Card/ItineraryCard.jsx'
import NoResults from '../../components/NoResults/NoResults'
import CtaButton from '../../components/CtaButton/CtaButton'
import { useDispatch, useSelector } from 'react-redux'
import { getOneCityAsync, getItinerariesByCityIdAsync } from '../../redux/actions/citiesActions'

const City = () => {
  const params = useParams()
  const cityId = params.id

  const dispatch = useDispatch()
  const {city, loading, itineraries} = useSelector(store => store.citiesReducers)

  useEffect(() => {
    dispatch(getOneCityAsync(cityId))
    dispatch(getItinerariesByCityIdAsync(cityId))
  }, [cityId]);

  return (
    <>
      <section>
        <div className="city">
          <Banner imageURL={city.image} height="75vh" />
          <div className="py-5 text-center container text-container">
            <div className="row py-lg-4 mask-custom">
              <div className="col-lg-8 col-md-10 mx-auto">
                <h1 className="fw-light">{city.name}</h1>
                <div className="details">
                  <h5 className="fw-light">{city.text}</h5>
                  <div className="details-row d-flex justify-content-between mt-3">
                    <h6 className="fw-light">Country: {city.country}</h6>
                    <h6 className="fw-light">Currency: {city.currency}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container itinerary mt-3'>  
          <h3 className="mb-3">MyTineraries</h3>    
          {loading === true ? (
            <NoResults message={'Loading...'} />
          ) : itineraries.length === 0 ? (
            <NoResults message={'Under Construction'}/>
          ) : (
            itineraries.map((iti, index) => (
            <ItineraryCard key={index} itinerary={iti} />
            ))
          )}
        </div>
        <div className='container text-center'>
          <CtaButton title="Back to Cities!" slink="/cities"/>
        </div>
      </section>
    </>
  )
}

export default City