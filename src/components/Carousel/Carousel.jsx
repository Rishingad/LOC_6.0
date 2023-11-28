import React from 'react'
import Carousel , { consts } from "react-elastic-carousel";
import "./Carousel.css"
import { FaArrowCircleRight , FaArrowCircleLeft } from "react-icons/fa";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1500, itemsToShow: 2 },
];

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <FaArrowCircleRight className='custom_icon' />  : <FaArrowCircleLeft className='custom_icon' />
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  )
}

const CarouselMain = () => {
  const settings = {
    pagination: true,
    isRTL: true,
  };

  const items = [
    { id: 1, content: 'Tech-Event 8', img: require('../../assets/images/img1.png') },
    { id: 2, content: 'Tech-Event 7', img: require('../../assets/images/img1.png') },
    { id: 3, content: 'Tech-Event 6', img: require('../../assets/images/img1.png') },
    { id: 4, content: 'Tech-Event 5', img: require('../../assets/images/img1.png') },
    { id: 5, content: 'Tech-Event 4', img: require('../../assets/images/img1.png') },
    { id: 6, content: 'Tech-Event 3', img: require('../../assets/images/img1.png') },
    { id: 7, content: 'Tech-Event 2', img: require('../../assets/images/img1.png') },
    { id: 8, content: 'Tech-Event 1', img: require('../../assets/images/img1.png') },
  ]
  return (
    <>
      <h1 className='carousel_head'>Glimpse of LOC 5.0</h1>
      <div className="carousel_elastic">
        <Carousel renderArrow = {myArrow} {...settings} breakPoints={breakPoints}>
          {items.map((item) => (
            <div className='item_set' key={item.id}>
              <img className='item_img' src={item.img} alt="" />
              <h2 className='item_head'>{item.content}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default CarouselMain