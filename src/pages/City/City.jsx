import React from 'react'
import './city.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import Banner from '../../components/Banner/Banner'

const City = () => {
  const params = useParams()
  const cityId = params.id
  //console.log(cityId)

  const [city, setCity] = useState([])

  useEffect(()=>{
    axios('http://localhost:3000/api/cities/'+ cityId)
      .then(res =>setCity(res.data.response))
  },[])

  return (
    <>
      <section className="city">
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
      </section>
    </>
  )
}

export default City