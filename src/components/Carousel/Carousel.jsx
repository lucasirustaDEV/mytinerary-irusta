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
            image: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          },
          {
              _id: "006",
              name: "Roma",
              text: "Oh la la!",
              image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              _id: "007",
              name: "Río",
              text: "Oh la la!",
              image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              _id: "008",
              name: "London",
              text: "Oh la la!",
              image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
                _id: "009",
                name: "Moscow",
                text: "Oh la la!",
                image: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                  _id: "010",
                  name: "Tokyo",
                  text: "Oh la la!",
                  image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  _id: "011",
                  name: "Beijing",
                  text: "Oh la la!",
                  image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  _id: "012",
                  name: "Berlín",
                  text: "Oh la la!",
                  image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
      ];

  return (
    <section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Cities</h3>
            </div>
            <div class="col-6 text-end">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                            {cities.slice(0, 4).map((city) => (
                                <CityCard destination={city} />
                            ))}

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                            {cities.slice(4, 8).map((city) => (
                                <CityCard destination={city} />
                            ))}

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

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