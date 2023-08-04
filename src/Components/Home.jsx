import React from 'react';
import vg from '../assets/2.webp';
import { AiFillYoutube } from 'react-icons/ai';

// Import the tanpura audio file
import tanpuraAudio from '../assets/tanpura_D.mp3';

const Home = () => {
  return (
    <>
      <div className='home' id='home'></div>

      <div className='home2'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            "Join us and harmonize your soul with the timeless rhythms of tradition, we are online + offline "
          </p>
        </div>
      </div>

      <div className='home3' id='aboutus'>
        <div>
          <h1>Who we are?</h1>
          <p>
            "At Nirmal Sangeet, we are a dynamic music academy that goes beyond borders, nurturing the musical aspirations of over 1000 students from both India and around the globe. Through our innovative blend of online and offline instruction, we harmonize tradition with technology, ensuring that every note resonates with excellence and reaches aspiring musicians wherever they are."
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Courses</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillYoutube />
              <p>Beginner </p>
            </div>
            <div style={{ animationDelay: '0.6s' }}>
              <AiFillYoutube />
              <p>Intermediate </p>
            </div>
            <div style={{ animationDelay: '0.9s' }}>
              <AiFillYoutube />
              <p>Advanced </p>
            </div>
            <div style={{ animationDelay: '1.2s' }}>
              <AiFillYoutube />
              <p>Mastery </p>
            </div>
          </article>
        </div>
      </div>

      {/* Adding the audio element for the tanpura */}
      <audio controls autoPlay volume={1}>
        <source src={tanpuraAudio} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default Home;
