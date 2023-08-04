import React from 'react'
import CityCard from '../Card/CityCard';

const Carousel = () => {

  const cities = [
        {
          _id: "001",
          name: "París",
          text: "Oh la la!",
          image: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            _id: "002",
            name: "New York",
            text: "Oh la la!",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          },
          {
            _id: "003",
            name: "Madrid",
            text: "Oh la la!",
            image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          },
          {
            _id: "004",
            name: "Buenos Aires",
            text: "Oh la la!",
            image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          },
          {
            _id: "005",
            name: "La Habana",
            text: "Oh la la!",
            image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          },
          {
              _id: "006",
              name: "Roma",
              text: "Oh la la!",
              image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              _id: "007",
              name: "Río",
              text: "Oh la la!",
              image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              _id: "008",
              name: "London",
              text: "Oh la la!",
              image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
                _id: "009",
                name: "Moscow",
                text: "Oh la la!",
                image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                  _id: "010",
                  name: "Tokyo",
                  text: "Oh la la!",
                  image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  _id: "011",
                  name: "Beijing",
                  text: "Oh la la!",
                  image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  _id: "012",
                  name: "Berlín",
                  text: "Oh la la!",
                  image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
  ];

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
                        <div className="carousel-item active">
                            <div className="row">

                              {cities.slice(0, 4).map((city) => (
                                <CityCard destination={city} />
                              ))}

                            </div>
                        </div>
                        <div className="carousel-item">
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