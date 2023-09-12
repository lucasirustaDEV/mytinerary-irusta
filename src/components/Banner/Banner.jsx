import React from 'react'
import './banner.css'

const Banner = ({ imageURL, height }) => {
    const bannerImage = {
        backgroundImage: `url(${imageURL})`,
        height: height,
    };

    return (
        <div className="city-image" style={bannerImage}></div>
    )
}

export default Banner