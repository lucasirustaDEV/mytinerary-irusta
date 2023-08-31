import React from 'react'
import CityCard from '../Card/CityCard'
//import cities from "../../data/cities.js"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCitiesAsync } from '../../redux/actions/citiesActions'

const Carousel = () => {

  //const [cities, setCities] = useState([])

  const dispatch = useDispatch()
  const {cities, loading} = useSelector(store => store.citiesReducers)

  useEffect(()=>{
    if (cities.length === 0){
      dispatch(getAllCitiesAsync())
    }
/*     axios('http://localhost:3000/api/cities/page/?page=1&limit=12')
      .then(res => {
        setCities(res.data.response)
      })
      .catch((err) => console.log(err)) */
  },[])

  const [counter, setCounter] = useState(0);

  const prev = () => {
    if (counter === 0) {
      setCounter( Math.trunc((cities.length/4))-1);
    } else {
      setCounter(counter - 1);
    }
  };

  const next = () => {
    if (counter === Math.trunc((cities.length/4))-1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      next()
    }, 3000)   
    return () => {      
      clearInterval(interval)
    }
  }, [counter])

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
            <div className="col-6 ps-3">
                <h3 className="mb-3">Cities</h3>
            </div>
            <div className="col-6 text-end pe-3">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev" onClick={prev}>
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next" onClick={next}>
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                  <div className="carousel-inner p-2">
                    <div className="carousel-item active">
                      <div className="row">

                        {cities.slice([counter * 4], [counter * 4 + 4]).map((city, index) => (
                          <CityCard key={index} destination={city} />
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel