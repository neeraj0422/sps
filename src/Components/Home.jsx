import React from 'react';
import vg from '../assets/sps-removebg-preview.png';
import { IoMdSchool } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { IoMdFootball } from 'react-icons/io';
import { IoMdBrush, IoIosDesktop, IoIosBook,  } from 'react-icons/io';

import '../styles/SharedStyles.css'; // Import the shared styles

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (level) => {
    if (level === 'Beginner') {
      navigate('/Beginner');
    } else if (level === 'Intermediate') {
      navigate('/Intermediate');
    } else if (level === 'Advanced') {
      navigate('/Advanced');
    } else if (level === 'Mastery') {
      navigate('/Mastery');
    }
  };

  return (
    <>
      <div className="rc-accordion-card home" id="home"></div>

      <div className="rc-accordion-card home2">
        <img className="pic" src={vg} alt="Graphics" />

        <div>
        <p>
    "At SHIVAM PUBLIC SCHOOL, connect your mind with the timeless essence of knowledge."
</p>

        </div>
      </div>

      <div className="rc-accordion-card home3" id="aboutus">
        <div>
        <img
  className="pic"
  src={vg}
  alt="Graphics"
  style={{
    maxWidth: '50%',
    maxHeight: '50%',
    width: 'auto',
    height: 'auto'
  }}
/>

          <h1>Who we are?</h1>
          <div>
          <p className="aboutus-text">
    "Welcome to SHIVAM PUBLIC SCHOOL, With a diverse community of students from various backgrounds, we embrace tradition while embracing modern educational methods. we ensure that every student receives a comprehensive education , preparing them for success in an ever-changing world."
        </p>

          </div>
        </div>
      </div>

      <div className="rc-accordion-card home4" id="brands">
        <div>
          <h1>Events</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }} onClick={() => handleClick('Beginner')}>
            <IoMdFootball />
              <p>sports </p>
            </div>
            <div style={{ animationDelay: '0.6s' }} onClick={() => handleClick('Intermediate')}>
            <IoMdBrush />
              <p>Activity</p>
            </div>
            <div style={{ animationDelay: '0.9s' }} onClick={() => handleClick('Advanced')}>
            <IoIosDesktop/>
              <p>computer Lab </p>
            </div>
            <div style={{ animationDelay: '1.2s' }} onClick={() => handleClick('Mastery')}>
            <IoIosBook />
              <p>Library </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
