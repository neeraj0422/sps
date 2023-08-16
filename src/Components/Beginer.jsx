import React from 'react';
import '../styles/Beginner.css'; // Import your separate CSS file for styling
import '../styles/SharedStyles.css'; // Import the shared styles

const Beginner = () => {
  return (
    <div className="beginner-container rc-accordion-card">
      <h1 className="beginner-heading">
        <span className="music-icon">🎵</span>
        <span className="flashing-text">INDIAN CLASSICAL MUSIC LEARNING SYLLABUS</span>
      </h1>
      <ul className="course-list">
        <li>Introduction to Indian Classical Music</li>
        <li>History of Indian Classical Music</li>
        <li>Basic concepts of Indian Classical Music (Nada, Shruti, Svara, Raga, Tala)</li>
        <li>Introduction to Hindustani and Carnatic music systems</li>
        <li>Understanding the structure of a Raga</li>
        <li>Learning the basics of rhythm and Talas</li>
        <li>Introduction to Indian musical instruments (Sitar, Tabla, Harmonium, etc.)</li>
        <li>Learning to sing or play simple compositions in different Ragas and Talas</li>
      </ul>
    </div>
  );
};

export default Beginner;
