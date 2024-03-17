import React from 'react';
import { IoMdSchool } from 'react-icons/io';

const ActivityCard = ({ activity, description, handleClick }) => {
    return (
        <div className="activity-card" onClick={() => handleClick(activity)}>
            <IoMdSchool />
            <h3>{activity}</h3>
            <p>{description}</p>
            <button>Learn More</button>
        </div>
    );
};

const ActivitiesPage = ({ handleClick }) => {
    return (
        <div className="activities-page">
            <h1>Activities</h1>
            <div className="activities-list">
                <ActivityCard
                    activity="Sports"
                    description="Engage in various sports activities and competitions to foster physical fitness and teamwork."
                    handleClick={handleClick}
                />
                <ActivityCard
                    activity="Arts"
                    description="Explore creativity through painting, music, drama, and other forms of artistic expression."
                    handleClick={handleClick}
                />
                <ActivityCard
                    activity="STEM"
                    description="Delve into science, technology, engineering, and mathematics through hands-on experiments and projects."
                    handleClick={handleClick}
                />
                <ActivityCard
                    activity="Community Service"
                    description="Contribute to the community through volunteering and service projects, developing empathy and social responsibility."
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default ActivitiesPage;
