import React from 'react'
import "./cities.css"
import cities from "../../data/cities.js"
import CityCard from '../../components/Card/CityCard'
import { useState, useEffect } from "react"

const Cities = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(cities);

  const handleSearch = (query) => {
    const filteredResults = cities.filter(city =>
      city.name.toLowerCase().startsWith(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    handleSearch(query);
  };

  return (
  <>
    <div className="city-image"></div>
    <div className="container col-md-4 mt-5">
      <div className="input-group">
        <input className="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Search city..." value={searchTerm} onChange={handleChange}/>
      </div>
    </div>
    <div className="col-12 mt-3 container">
      <div className="row">
        {searchResults.length === 0 ? (
          <section class="py-5 text-center container bg-light ">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">No results found</h1>
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