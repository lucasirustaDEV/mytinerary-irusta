import React from 'react'
import "./heroe.css";
import CtaButton from '../CtaButton/CtaButton';

export default function Heroe() {
  return (
    <section className="background-container">
      <div className="welcome-container">
        <h1 className='fw-light'>FIND THE PERFECT DESTINATION</h1>
        <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <CtaButton title="Make Your Dreams Come True!" slink="/cities"/>
      </div>
    </section>
  )
}
