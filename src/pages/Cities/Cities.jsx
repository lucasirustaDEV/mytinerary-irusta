import React, { useRef } from 'react'
import "./cities.css"
import CityCard from '../../components/Card/CityCard'
import { useState, useEffect } from "react"
import Banner from '../../components/Banner/Banner'
import { getAllCities } from '../../services/citiesQueries'
import NoResults from '../../components/NoResults/NoResults'

const Cities = () => {
  const bannerImg = "https://images.unsplash.com/photo-1610995195985-7229a1409d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  const inputRef = useRef(null)

  const [cities, setCities] = useState([])

  useEffect(()=>{
    getAllCities()
      .then(res => {
        setCities(res)
      })
      .catch((err) => console.log(err))
  },[])

  const handleClick = () => {
    //console.log(inputRef.current.value)
    let search = inputRef.current.value.trim()
    let query = '?name='
    getAllCities(query + search).then(setCities)
  }

  const handleInputFocus = () => {
    inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div className="search-city">
        <Banner imageURL={bannerImg} />
        <div className="container col-md-4 mt-3 search-input">
          <div className="search-group">
            <input className="search-bar" type="text" placeholder="Search city..." ref={inputRef} onFocus={handleInputFocus}/>
            <button className="search-button" type="submit" onClick={handleClick}>🔍</button>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 container">
        <div className="row">
          {cities.length === 0 ? (
            <NoResults message={'No results found'}/>
          ) : (
            cities.map((city, index) => (
            <CityCard key={index} destination={city} />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Cities