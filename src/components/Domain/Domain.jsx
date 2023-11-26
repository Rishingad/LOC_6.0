import React from 'react'
import Card from './Card'
import "./Domain.css"
import img1 from "../../assets/icons/006-backend 1.png"
import img2 from "../../assets/icons/001-app-development 1.png"
import img3 from "../../assets/icons/002-artificial-intelligence 1.png"
import img4 from "../../assets/icons/002-blockchain 1.png"
import img5 from "../../assets/icons/001-iot 1.png"
import img6 from "../../assets/icons/005-innovation 1.png"

const Domain = () => {
    const cards = [
        { img: img1 , title: 'WEB DEV' },
        { img: img2 , title: 'APP DEV' },
        { img: img3 , title: 'AIML' },
        { img: img4 , title: 'BLOCKCHAIN' },
        { img: img5 , title: 'IOT' },
        { img: img6 , title: 'OPEN INNOVATION' }
    ]
    return (
        <div id='domain'>
            <div className="d_head">Domains</div>
            <div className="card-list">
                {cards.map((card, unique) => (
                    <Card key={unique} img={card.img} title={card.title} />
                ))}
            </div>
        </div>
    )
}

export default Domain
