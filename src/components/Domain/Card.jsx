import React from 'react'
import "./Domain.css"

const Card = ({ img, title }) => {
    return (
        <div>
            <div className="card">
                <div className="inner_card">
                    <img className='domain_img' src={img} alt="" />
                    <p className='domain_title'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
