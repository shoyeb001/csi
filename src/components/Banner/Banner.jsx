import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='home'>
        <div className='container'>
            <div className='main'>
                <h1>Consult With <span className='high'>Best Doctors</span>  <br/> Your Nearby Location.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est!</p>
                <button className='button'>Start a consult</button>
            </div> 
            <div className='photo'>
              <img className='virus' src='/assets/virus.png'/>
              <img className='nose' src='/assets/throat.png'/>
              <div className='container'>
                <img src='/assets/doctor.png'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner