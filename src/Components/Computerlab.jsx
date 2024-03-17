import React from 'react';
import { IoMdSchool } from 'react-icons/io';

const LabFeatureCard = ({ title, description, handleClick }) => {
    return (
        <div className="lab-feature-card" onClick={() => handleClick(title)}>
            <IoMdSchool />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Learn More</button>
        </div>
    );
};

const ComputerLabPage = ({ handleClick }) => {
    return (
        <div className="computer-lab-page">
            <h1>Computer Lab</h1>
            <div className="lab-features-list">
                <LabFeatureCard
                    title="Hardware"
                    description="Learn about the latest computer hardware technology and maintenance techniques."
                    handleClick={handleClick}
                />
                <LabFeatureCard
                    title="Software"
                    description="Explore a variety of software applications and programming languages in our computer lab."
                    handleClick={handleClick}
                />
                <LabFeatureCard
                    title="Networking"
                    description="Understand the fundamentals of computer networking, including protocols and configurations."
                    handleClick={handleClick}
                />
                <LabFeatureCard
                    title="Cybersecurity"
                    description="Discover strategies for protecting computer systems and data from cyber threats."
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default ComputerLabPage;
