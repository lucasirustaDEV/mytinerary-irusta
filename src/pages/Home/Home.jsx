import React from 'react'
import LayoutMain from '../Layouts/LayoutMain'
import Heroe from '../../components/Heroe/Heroe'
import Carousel from '../../components/Carousel/Carousel'

const Home = () => {
  return (
    <LayoutMain>
      {/* <h1>PRUEBA CHILDREN</h1> */}
      <Heroe/>
      
      <Carousel/>
    </LayoutMain>
  )
}

export default Home
