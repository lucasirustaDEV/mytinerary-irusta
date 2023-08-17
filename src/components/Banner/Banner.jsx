import React from 'react'
import './banner.css'

const Banner = ({ imageURL }) => {
    const bannerImage = {
        backgroundImage: `url(${imageURL})`,
    };

    return (
        <div className="city-image" style={bannerImage}></div>
    )
}

export default Banner