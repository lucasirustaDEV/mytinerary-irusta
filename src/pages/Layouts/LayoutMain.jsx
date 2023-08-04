import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heroe from '../../components/Heroe/Heroe'
import Carousel from '../../components/Carousel/Carousel'

export default function LayoutMain() {
  return (
    <div className="app-layout">
      <header className="container app-header">
        <Header/>
      </header>
      <Heroe/>
      <Carousel/>
      <footer className="container app-footer">
        <Footer/>
      </footer>

    </div>
  )
}
