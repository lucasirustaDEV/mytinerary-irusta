import React from 'react'
import CityCard from '../Card/CityCard';
import cities from "../../data/cities.js"
import CarouselItem from './CarouselItem';

const carouselItem = [
  { id: '1', active: true },
  { id: '2', active: false },
  { id: '3', active: false },
]

const CarouselNew = () => {

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
            <div className="col-6">
                <h3 className="mb-3">Cities</h3>
            </div>
            <div className="col-6 text-end">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  {[0, 4, cities.length - 4].map((startIndex, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      {cities.slice(startIndex, startIndex + 4).map((city) => (
                        <CityCard key={city.id} destination={city} />
                      ))}
                    </div>
                  </div>
                  ))}
                </div>

                   {/*  <div className="carousel-inner"> */}

{/*                       {carouselItem.map((item) => (
                        <CarouselItem item={item} />
                      ) )} */}
{/*                         <div className="carousel-item active">
                            <div className="row">

                              {cities.slice(0, 4).map((city) => (
                                <CityCard destination={city} />
                              ))}

                            </div>
                        </div> */}
{/*                         <div className="carousel-item">
                            <div className="row">

                              {cities.slice(4, 8).map((city) => (
                                <CityCard destination={city} />
                              ))}

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                              {cities.slice(-4).map((city) => (
                                <CityCard destination={city} />
                              ))}

                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselNew