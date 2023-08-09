import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heroe from '../../components/Heroe/Heroe'
import Carousel from '../../components/Carousel/Carousel'
import { Outlet } from "react-router-dom"

export default function LayoutMain( ) {
  return (
    <div className="app-layout">
      <header className="container app-header">
        <Header/>
      </header>
      
      <main className='app-main'>
        <Outlet />
      </main>
      <footer className="container app-footer">
        <Footer/>
      </footer>

    </div>
  )
}