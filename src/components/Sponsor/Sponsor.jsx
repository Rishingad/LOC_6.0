import React from 'react';
import "./Sponsor.css";
import eth from "../../assets/images/Devfolio_Logo-White@2x.png";
import Devfolio from "../../assets/images/ethindia-light.png";
import Polygon from "../../assets/images/Polygon_Logo-Colored@2x.png";

const Sponsor = () => {
  return (
    <>
      <div className='sponsor-container text-center'>
        <h1 className='sponsor-Head mb-4'>
          Sponsors
        </h1>
        <div className="flex flex-col items-center mt-8">
          <img className='sponsor-img mt-4' src={eth} alt='Eth'/>
          <img className='sponsor-img mt-4' src={Polygon} alt='Polygon'/>
        </div>
        <div className="mb-8">
          
          <img className='sponsor-img mx-auto mb-4' src={Devfolio} alt='Devfolio'/>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
