import React from 'react'
import './city.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import Banner from '../../components/Banner/Banner.jsx'
import ItineraryCard from '../../components/Card/ItineraryCard.jsx'
import NoResults from '../../components/NoResults/NoResults'

const City = () => {
  const params = useParams()
  const cityId = params.id

  const [city, setCity] = useState([])
  const [itineraries, setItineraries] = useState([])

  useEffect(() => {
    axios(`http://localhost:3000/api/cities/${cityId}`)
      .then(res => {
        setCity(res.data.response);
      })
      .catch(err => {
        console.error(err);
      });
  
      axios(`http://localhost:3000/api/itineraries?city=${cityId}`)
      .then(resp => {
        setItineraries(resp.data.response);
        console.log(itineraries)
      })
      .catch(err => {
        console.error(err);
      });
  }, [cityId]);

  return (
    <>
      <section>
        <div className="city">
          <Banner imageURL={city.image} />
          <div className="py-5 text-center container text-container">
            <div className="row py-lg-4 mask-custom">
              <div className="col-lg-8 col-md-10 mx-auto">
                <h1 className="fw-light">{city.name}</h1>
                <h4 className="fw-light">Culture: {city.text}</h4>
                <h4 className="fw-light">Country: {city.country}</h4>
                <h4 className="fw-light">Currency: {city.currency}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='container itinerary mt-3'>
          {itineraries.length === 0 ? (
            <NoResults message={'No results found'}/>
          ) : (
            itineraries.map((iti, index) => (
            <ItineraryCard key={index} itinerary={iti} />
            ))
          )}
        </div>
      </section>
    </>
  )
}

export default City