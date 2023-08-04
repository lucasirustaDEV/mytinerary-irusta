import React from 'react'

const CityCard = ({ destination }) => {
  console.log(destination)
  return (
    <div class="col-md-3 mb-3">
    <div class="card">
        <img class="img-fluid" alt="100%x280" src={destination.image}/>
        <div class="card-body">
            <h4 class="card-title">{destination.name}</h4>
            <p class="card-text">{destination.text}</p>
            <p><a class="btn btn-lg btn-primary" href="#">Go!</a></p>
        </div>
    </div>
</div>
  )
}

export default CityCard