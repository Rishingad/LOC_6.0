import React from 'react'
import locimg1 from "../../assets/images/locimg1.png";
import "./partner.css"

const Partner = () => {
  return (
    <>
      <div className="partner-container">
        <img className='partner-img' src={locimg1} alt='locimg1' />
        <div className='partner-main'>
          <p className='partner-main-head'>
            want to partner with us?
          </p>
          <p className='partner-main-body'>
            Be part of the transformation and make a lasting impact
            by partnering LINES OF CODES, a premier hackathon event
            that brings together talented individuals to innovate and
            create ground breaking solution. As a partner , you’ll gain
            valuable visibility among a highly engaged audience, connect
            with top tech talent, and position your brand as a leader in
            the industry. Join us in empowering the next generation of innovators
            and driving technological advancements
          </p>
          <a href="#contact">
            <button className='partner-main-button'>
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Partner
