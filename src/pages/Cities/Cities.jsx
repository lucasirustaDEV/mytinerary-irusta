import React, { useRef } from 'react'
import "./cities.css"
//import cities from "../../data/cities.js"
import CityCard from '../../components/Card/CityCard'
import { useState, useEffect } from "react"
import axios from 'axios'
import Banner from '../../components/Banner/Banner'

const Cities = () => {
  const bannerImg = "https://images.unsplash.com/photo-1610995195985-7229a1409d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  const inputRef = useRef(null)

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

/*   const handleSearch = (query) => {
    const filteredResults = cities.filter(city =>
      city.name.toLowerCase().startsWith(query.toLowerCase())
    )
    setSearchResults(filteredResults)
  } */

  const handleSearch = (query) => {
    axios('http://localhost:3000/api/cities/search/' + query.toLowerCase())
      .then(res => {
        setSearchResults(res.data.response)
      })
  }

  const handleChange = (event) => {
    //console.log(event.target.value)
    const query = event.target.value
    setSearchTerm(query)
    if (query != ''){     
      handleSearch(query)
    } else {
      setSearchResults(cities)
    }
  }

  const handleInputFocus = () => {
    inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div className="search-city">
        <Banner imageURL={bannerImg} />
        <div className="container col-md-4 mt-3 search-input">
          <div className="input-group">
            <input className="form-control py-2 rounded-pill" type="search" placeholder="Search city..." 
              value={searchTerm} onChange={handleChange} ref={inputRef} onFocus={handleInputFocus}/>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 container">
        <div className="row">
          {searchResults.length === 0 ? (
            <section className="py-5 text-center container">
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