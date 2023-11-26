import React from 'react'
import "./Prizes.css"
import comingSoon from "../../assets/images/comingSoon.png"

const Sponsor = () => {
  return (
    <>
     <div id='prize' className='sponsor-container'>
        <h1 className='sponsor-Head'>
            Prizes
        </h1>
        <img className='sponsor-img' src={comingSoon} alt='comingSoon'/>
        </div> 
    </>
  )
}

export default Sponsor
