import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

// Import project images
import aiImg from '../assets/projects/RCS.jpg';
import mlImg from '../assets/projects/imct.jpg';
import cyImg from '../assets/projects/ftcr.jpg';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const projectsData = [
            {
                id: 1,
                title: 'AI Product Recommendation System',
                description: 'Built a Retrieval Augmented Generation (RAG) application using Amazon product data. Implemented web scraping to extract product information, processed text using hybrid chunking, and developed a hybrid search system for efficient data retrieval and generation.',
                technologies: ['Python', 'Flask', 'Langchain', 'BeautifulSoup', 'HuggingFace', 'OpenAI', 'PostgreSQL', 'Streamlit', 'Docker'],
                image: aiImg,
                githubLink: '',
                liveLink: '',
                category: 'ai',
            },
            {
                id: 2,
                title: "Impressico's Chatbot",
                description: 'Developed a machine learning-based disease prediction system that analyzes patient symptoms to predict potential health conditions. Implemented multiple ML algorithms for accurate diagnosis and built a user-friendly web interface for patient and doctor interaction.',
                technologies: ['Python', 'Flask', 'Langchain', 'PGvector', 'Beautifulsoup', 'OpenAI', 'PostgreSQL', 'Docker'],
                image: mlImg,
                githubLink: '',
                liveLink: '',
                category: 'ai',
            },
            {
                id: 3,
                title: 'Fact-Checker',
                description: 'A robust multi-agent fact-checking system that verifies claims using real-time web search and news sources, leveraging LangChain and CrewAI for agentic reasoning and accurate response generation.',
                technologies: ['Python', 'LangChain', 'CrewAI', 'Streamlit', 'Google Search API', 'GNews API', 'DuckDuckGo'],
                image: cyImg,
                githubLink: '',
                liveLink: '',
                category: 'ai',
            }
        ];

        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    const handleFilterChange = (newFilter) => {
        setIsAnimating(true);
        setFilter(newFilter);

        setTimeout(() => {
            if (newFilter === 'all') {
                setFilteredProjects(projects);
            } else {
                const filtered = projects.filter(project => project.category === newFilter);
                setFilteredProjects(filtered);
            }
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="projects-page">
            <section className="projects-hero">
                <h1>My Projects</h1>
                <p>Explore my work in GenAI, agentic frameworks, and Python backend development.</p>
            </section>

            <section className="projects-section">
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('ai')}
                    >
                        AI/GenAI
                    </button>
                </div>

                <div className={`projects-grid ${isAnimating ? 'animating' : ''}`}>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;