import React, { useRef } from 'react'
import "./cities.css"
import CityCard from '../../components/Card/CityCard'
import { useState, useEffect } from "react"
import Banner from '../../components/Banner/Banner'
import NoResults from '../../components/NoResults/NoResults'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCitiesAsync, setSearch } from '../../redux/actions/citiesActions'

const Cities = () => {
  const bannerImg = "https://images.unsplash.com/photo-1610995195985-7229a1409d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  const inputRef = useRef(null)

  const dispatch = useDispatch()
  const {cities, loading, search} = useSelector(store => store.citiesReducers)

  useEffect(()=>{
    if(cities.length === 0){
      dispatch(getAllCitiesAsync())
    }
  },[])

  const handleChange = () => {
    //console.log(inputRef.current.value)
    let newSearch = inputRef.current.value.trim()
    let query = '?name='
    dispatch(getAllCitiesAsync(query + newSearch))
    dispatch(setSearch(newSearch))
  }

  const handleInputFocus = () => {
    inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div className="search-city">
        <Banner imageURL={bannerImg} height="75vh"/>
        <div className="container col-md-4 mt-3 search-input">
          <div className="search-group">
            <input className="form-control py-2 rounded-pill" type="search" placeholder="Search city..." 
              value={search} onChange={handleChange} ref={inputRef} onFocus={handleInputFocus}/>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 container">
        <h3 className="mb-3">Cities</h3>
        <div className="row">
          {loading === true ? (
            <NoResults message={'Loading...'} />
            ) : cities.length === 0 ? (
              <NoResults message={'No results found'} />
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