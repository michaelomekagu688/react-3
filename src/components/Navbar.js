
import React from 'react';
import logoImg from "../images/logo192.png";

function Navbar() {
    return(
        <nav className='nav-main'> 
            <img src={logoImg} alt='logo' className='logo-img' />
            <h1 className='nav-h1'> ReactFacts</h1>
            <h4> ReactCourse - Project 1</h4>
        </nav>
    )
}

export default Navbar