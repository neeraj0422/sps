import React from 'react';
import { IoMdSchool } from 'react-icons/io';

const SportsCard = ({ sport, description, handleClick }) => {
    return (
        <div className="sports-card" onClick={() => handleClick(sport)}>
            <IoMdSchool />
            <h3>{sport}</h3>
            <p>{description}</p>
            <button>Learn More</button>
        </div>
    );
};

const SportsPage = ({ handleClick }) => {
    return (
        <div className="sports-page">
            <h1>Sports</h1>
            <div className="sports-list">
                <SportsCard
                    sport="Football"
                    description="Join our football team and experience the thrill of competition on the field."
                    handleClick={handleClick}
                />
                <SportsCard
                    sport="Basketball"
                    description="Dribble, shoot, and score with our basketball team. Develop teamwork and coordination skills."
                    handleClick={handleClick}
                />
                <SportsCard
                    sport="Swimming"
                    description="Dive into our swimming program and learn essential water safety skills while staying fit."
                    handleClick={handleClick}
                />
                <SportsCard
                    sport="Tennis"
                    description="Serve, volley, and ace your opponents in our tennis program. Improve agility and precision."
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default SportsPage;
