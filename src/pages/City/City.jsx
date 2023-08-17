import React from 'react'
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
    <Banner imageURL={city.image} />
    <section className="py-5 text-center container bg-light mt-0">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">City {city.name}</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default City