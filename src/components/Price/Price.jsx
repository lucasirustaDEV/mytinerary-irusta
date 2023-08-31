import React from 'react'
import './price.css'

const Price = ({ price }) => {
    const signs = [];
    for (let i = 0; i < 5; i++) {
        const isHighlighted = i < price;
    
        signs.push(
          <span
            key={i}
            className={`dollar-sign ${isHighlighted ? 'highlight' : ''}`}
          >
            $
          </span>
        );
    }

    return (
        <div className="dollar-signs">
            <h3>Price: {signs} </h3>
            
        </div>
    )
}

export default Price