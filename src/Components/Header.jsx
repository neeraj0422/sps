import React from 'react';
import {HashLink} from 'react-router-hash-link';
import image1 from '../assets/a111.png';

const Header = () => {
    return (
        <>
            <nav>

                
              <img className="a1" style={{ display: '100%', width: '10em', height: '88px' }} src={image1} alt="Logo" />
                <h1 className='head' style={{textTransform : 'none'}}> Nirmal Sangeet</h1>
                
                <main>
                    <HashLink to = '/#home' >Home</HashLink>
                    <HashLink to = '/contact' >Contact</HashLink>
                    <HashLink to = '/#aboutus' >AboutUs</HashLink>
                    <HashLink to = '/#brands' >Courses</HashLink>
                    <HashLink to = '/services' >Services</HashLink>
                </main>
            </nav>
        </>
    )
}

export default Header