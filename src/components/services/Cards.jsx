import React from 'react'
import "./Card.css"

const Cards = () => {
  return (
    <div className='card'>
      <div className='image'>
        <img src='/assets/article.jpg'/>
      </div>
      <div className='card-body'>
        <h4>Pregnancy Care</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aperiam.</p>
        <p><a href=''>Learn More</a></p>
      </div>
    </div>
  )
}

export default Cards