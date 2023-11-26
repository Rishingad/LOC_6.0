import React from 'react'
import "./Sponsor.css"
import comingSoon from "../../assets/images/comingSoon.png"

const Sponsor = () => {
  return (
    <>
     <div className='sponsor-container'>
        <h1 className='sponsor-Head'>
            Sponsors
        </h1>
        <img className='sponsor-img' src={comingSoon} alt='comingSoon'/>
        </div> 
    </>
  )
}

export default Sponsor
