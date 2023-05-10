import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Card() {
  return (
    <div className='cards'>
        <h1 id='Projects'>My Projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__item">
                    <CardItem  
                    src="images/ecomixx.png"
                    text="Ecomixx Concrete Solution Corp."
                    label="Mini-Project1"
                    />
                    <CardItem  
                    src="images/FreelancePH.png"
                    text="FreelancePH - React/Typescript"
                    label="Mini-Project2"
                    />
                    <CardItem  
                    src="images/FreelancePH_Laravel.png"
                    text="FreelancePH - Laravel/Blade"
                    label="Capstone Project"
                    />
                    
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Card