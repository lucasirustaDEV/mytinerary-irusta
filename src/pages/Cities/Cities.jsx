import React from 'react'
import "./cities.css"
//import cities from "../../data/cities.js"
import CityCard from '../../components/Card/CityCard'
import { useState, useEffect } from "react"
import axios from 'axios'
import Banner from '../../components/Banner/Banner'

const Cities = () => {
  const bannerImg = "https://images.unsplash.com/photo-1610995195985-7229a1409d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const [cities, setCities] = useState([])

  useEffect(()=>{
    axios('http://localhost:3000/api/cities')
      .then(res => {
        setCities(res.data.response)
        setSearchResults(res.data.response)
      })
  },[])

  const handleSearch = (query) => {
    const filteredResults = cities.filter(city =>
      city.name.toLowerCase().startsWith(query.toLowerCase())
    )
    setSearchResults(filteredResults)
  }

  const handleChange = (event) => {
    //console.log(event.target.value)
    const query = event.target.value
    setSearchTerm(query)
    handleSearch(query)
  }

  return (
  <>
    <Banner imageURL={bannerImg} />
    <div className="container col-md-4 mt-5">
      <div className="input-group">
        <input className="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Search city..." value={searchTerm} onChange={handleChange}/>
      </div>
    </div>
    <div className="col-12 mt-3 container">
      <div className="row">
        {searchResults.length === 0 ? (
          <section className="py-5 text-center container bg-light ">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">No results found</h1>
              </div>
            </div>
          </section>
        ) : (
          searchResults.map((city, index) => (
          <CityCard key={index} destination={city} />
          ))
        )}
      </div>
    </div>
  </>
  )
}

export default Cities