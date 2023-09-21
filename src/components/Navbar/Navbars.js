import React from 'react'
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsHandIndexThumb } from "react-icons/bs";
import "./Navbar.css"

const Navbars = () => {
    return (
        <>
            <nav className='navbar' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a className='navbar-item' href='https://bulma.io'>
                        <img src='/assets/logo2.png' width='112' height='28' />
                    </a>
                    <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>
                <div id='navbarBasicExample' className='navbar-menu'>
                    <div className='navbar-start'>
                        <a className='navbar-item'>Home</a>
                        <a className='navbar-item'>About</a>
                        <a className='navbar-item'>Services</a>
                        <a className='navbar-item'>Doctors</a>
                        <a className='navbar-item'>Contact Us</a>
                    </div>


                    <div className='buttons'>
                        <a className='button btn'><AiOutlineVideoCamera className='icons'/> <strong>Live Call</strong></a>
                        < a className='button btn2'><BsHandIndexThumb className='icons'/>Appointment</a>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbars