import React from 'react';
import '../styles/ExperienceCard.css';

const ExperienceCard = ({ position, company, duration, location, responsibilities }) => {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <h3 className="position">{position}</h3>
                <p className="company">{company}</p>
                <p className="duration-location">
                    <span className="duration">{duration}</span> | <span className="location">{location}</span>
                </p>
            </div>
            <div className="experience-content">
                <ul className="responsibilities">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
