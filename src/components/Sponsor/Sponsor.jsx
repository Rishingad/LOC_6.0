import React from 'react';
import "./Sponsor.css";
import eth from "../../assets/images/Devfolio_Logo-White@2x.png";
import Devfolio from "../../assets/images/ethindia-light.png";
import Polygon from "../../assets/images/Polygon_Logo-Colored@2x.png";

const Sponsor = () => {
  return (
    <>
      <div className='sponsor-container  '>
        <h1 className='sponsor-Head justify-center text-center items-center flex flex-col '>
          Sponsors
        </h1>
        <div className="flex mt-8">
          <img className='sponsor-img mr-4' src={Devfolio} alt='Devfolio'/>
          <img className='sponsor-img ml-[8rem]' src={Polygon} alt='Polygon'/>
        </div>
        <img className='sponsor-img mt-4' src={eth} alt='Eth'/>
      </div>
    </>
  );
};

export default Sponsor;
