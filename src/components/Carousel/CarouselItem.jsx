import React from 'react'
import cities from "../../data/cities.js"
import CityCard from '../Card/CityCard.jsx'

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
        <div className="row">
            {/* <p>{item.id}</p> */}
        {cities.slice(item.id, 4).map((city) => (
            <CityCard destination={city} />
        ))}

        </div>
    </div>
  )
}

export default CarouselItem
