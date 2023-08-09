import React from 'react'
import LayoutMain from '../Layouts/LayoutMain'
import Heroe from '../../components/Heroe/Heroe'
import Carousel from '../../components/Carousel/Carousel'
import CarouselNew from '../../components/Carousel/CarouselNew'

const Home = () => {
  return (
    <>
      <Heroe/>
      
      <Carousel/>
      <CarouselNew/>

    </>
  )
}

export default Home
