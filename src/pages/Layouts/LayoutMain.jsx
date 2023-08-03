import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heroe from '../../components/Heroe/Heroe'

export default function LayoutMain() {
  return (
    <div className="app-layout">
      <header className="container app-header">
        <Header/>
      </header>
      <Heroe/>
      <footer className="container app-footer">
        <Footer/>
      </footer>

    </div>
  )
}
