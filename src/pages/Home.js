import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { FaCode, FaDatabase, FaRobot, FaBrain } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />

            <section className="highlight-section">
                <div className="section-title">
                    <h2>What I Do</h2>
                    <p>Specializing in AI, Agnetic and Backend Development</p>
                </div>
                <div className="highlight-grid">
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaRobot />
                        </div>
                        <h3>Generative AI</h3>
                        <p>Build and implement cutting-edge GenAI solutions, including RAG applications, Agentic Framework using the latest models and techniques.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaCode />
                        </div>
                        <h3>Python Development</h3>
                        <p>Create robust applications using Flask with clean, maintainable code and optimal performance.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaDatabase />
                        </div>
                        <h3>DataBase</h3>
                        <p>Design and implement data pipelines, storage solutions, and search systems using SQL, Postgres, and VectorDB.</p>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="stat-item">
                    <h3>CodeKaze 2023</h3>
                    <p>National rank 1616</p>
                </div>
                <div className="stat-item">
                    <h3>CodeKaze 2022</h3>
                    <p>National rank 3106</p>
                </div>
                <div className="stat-item">
                    <h3>86.8%</h3>
                    <p>B.Tech. Computer Science</p>
                </div>
                <div className="stat-item">
                    <h3>1.5+</h3>
                    <p>Years of Experience</p>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to build intelligent solutions?</h2>
                <p>Let's collaborate to create cutting-edge AI, agent-based, and backend applications that solve real-world challenges.</p>
                <Link to="/contact" className="btn btn-primary">
                    Get in Touch
                </Link>
            </section>
        </div>
    );
};

export default Home;