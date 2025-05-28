import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = ({ title, icon, skills }) => {
    return (
        <div className="skill-card">
            <div className="skill-header">
                <div className="skill-icon">{icon}</div>
                <h3>{title}</h3>
            </div>
            <ul className="skill-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
