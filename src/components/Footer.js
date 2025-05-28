import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <span>Gaurav Pandey</span>
                    <p>Python Developer & AI/ML Engineer</p>
                </div>
                <div className="footer-links">
                    <a href="https://linkedin.com/in/gaurav-pandey-684853210/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/gauravpandey327" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:gaurav1237890@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Gaurav Pandey. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
