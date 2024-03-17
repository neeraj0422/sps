import React from 'react';
import {HashLink} from 'react-router-hash-link';
import image1 from '../assets/spslogo.jpg';

const Header = () => {
    return (
        <>
            <nav>

                
            <img 
  className="a1" 
  style={{ 
    display: 'block', 
    width: '5em', 
    height: '5em', 
    borderRadius: '50%' // Makes the image circular
  }} 
  src={image1} 
  alt="Logo" 
/>
                <h1 className='head' style={{textTransform : 'none'}}> SHIVAM PUBLIC SCHOOL</h1>
                
                <main>
                    <HashLink to = '/#home' >Home</HashLink>
                    <HashLink to = '/contact' >Contact</HashLink>
                    <HashLink to = '/#aboutus' >AboutUs</HashLink>
                    <HashLink to = '/#brands' >Events</HashLink>
                    <HashLink to = '/services' > Gallary </HashLink>
                </main>
            </nav>
            <div className="admission-notice">
                <marquee behavior="scroll" direction="left">Admissions open for session 2024-2025 ,      call us :6200437407,9771694981</marquee>
            </div>
        </>
    )
}

export default Header