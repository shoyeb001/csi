import React from 'react'
import "./Services.css"
import Cards from './Cards'

const Services = () => {
    return (
        <>
            <div className='service'>
                <div className='heading'>
                    Our Services
                </div>
                <br />
                <h3>Best Quality Service For You</h3>
                <div className='s-container'>
                    <div className='media'>
                        <div className='doctor'>
                            <img src='/assets/doctor3.png' />
                        </div>
                    </div>
                    <div className='article'>
                       <div className='card-item'>
                        <Cards/>
                        <Cards/>
                       </div>
                       <button className='button'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services