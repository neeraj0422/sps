import React from 'react';
import vg from '../assets/2.png';
import { AiFillYoutube } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
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
            "Join  your soul with the timeless rhythms of tradition, we are online + offline "
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
              "At Nirmal Sangeet, we are a dynamic music academy that goes beyond borders, nurturing the musical aspirations of over 1000 students from both India and around the globe. Through our innovative blend of online and offline instruction, we harmonize tradition with technology, ensuring that every note resonates with excellence and reaches aspiring musicians wherever they are."
            </p>
          </div>
        </div>
      </div>

      <div className="rc-accordion-card home4" id="brands">
        <div>
          <h1>Courses</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }} onClick={() => handleClick('Beginner')}>
              <AiFillYoutube />
              <p>Beginner </p>
            </div>
            <div style={{ animationDelay: '0.6s' }} onClick={() => handleClick('Intermediate')}>
              <AiFillYoutube />
              <p>Intermediate </p>
            </div>
            <div style={{ animationDelay: '0.9s' }} onClick={() => handleClick('Advanced')}>
              <AiFillYoutube />
              <p>Advanced </p>
            </div>
            <div style={{ animationDelay: '1.2s' }} onClick={() => handleClick('Mastery')}>
              <AiFillYoutube />
              <p>Mastery </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
