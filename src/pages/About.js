import React from 'react';
import { FaAws, FaDocker, FaCode, FaServer, FaDatabase, FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiFlask, SiAccenture, SiElasticsearch, SiLinux, SiGithub } from 'react-icons/si';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/About.css';

// Import project images
import aiImg from '../assets/projects/RCS.jpg';
import mlImg from '../assets/projects/imct.jpg';
import cyImg from '../assets/projects/ftcr.jpg';
import dhImg from '../assets/projects/dh.jpg';  
import viImg from '../assets/projects/vi.jpg';

const About = () => {
    const skills = [
        {
            title: 'Programming & DevOps',
            icon: <FaCode />,
            skills: [
                'Python',
                'Flask',
                'FastAPI',
                'Docker',
                'Linux',
                'Streamlit',
                'AWS',
            ],
        },
        {
            title: 'AI & Machine Learning',
            icon: <SiAccenture />,
            skills: [
                'Generative AI (GenAI)',
                'Agentic Frameworks',
                'Fine-Tuning',
                'LangChain',
                'LangGraph',
                'CrewAI',
                'RAG (Retrieval-Augmented Generation)',
                'LLM (Large Language Models)',
                'GPT Models',
                'OpenAI',
                'Hugging Face',
            ],
        },
        {
            title: 'Databases & Search',
            icon: <FaDatabase />,
            skills: [
                'SQL',
                'PostgreSQL',
                'MySQL',
                'VectorDB',
                'PineconeDB',
                'ChromaDB',
                'Database Management',
                'Data Processing',
            ],
        },
    ];
    
    const experiences = [
        {
            position: 'Engineer',
            company: 'HL Mando Softech India',
            duration: 'July 2025 – Present',
            location: 'Gurugram, India',
            responsibilities: [
                'Developed an AI Discrepancy Highlighter to compare master and test 2D engineering brake design drawings using YOLOv11 for parameter localization and DeepseekOCR for extracting dimensions and tolerances.',
                'Performed model fine-tuning on custom annotated datasets to improve parameter recognition accuracy, achieving 98%+ reliable extraction in complex engineering drawings.',
                'Designed and built Vaani – Workforce Self-Service AI, a secure HR/IT policy assistant with authentication, data pipelines, ChromaDB semantic retrieval with reranking, and MySQL query guardrails.',
                'Collaborated with cross-functional teams to deliver AI-driven quality inspection and internal self-service solutions, reducing manual validation and improving operational efficiency.'
            ],
        },
        {
            position: 'Trainee Engineer',
            company: 'Impressico Business Solutions',
            duration: 'January 2024 – June 2025',
            location: 'Noida, India',
            responsibilities: [
                'Designed and developed a personalized internal chatbot using Generative AI, LLMs, and RAG to deliver context-aware and tailored responses based on user queries.',
                'Built a data ingestion and processing pipeline to clean, preprocess, and generate vector embeddings using HuggingFace models, storing embeddings in PostgreSQL for efficient semantic retrieval.',
                'Developed an AI Product Recommendation System for electronics data by integrating SQL-based filtering with semantic search to retrieve relevant products.',
                'Implemented hybrid search by combining structured database queries with vector similarity search, and passed retrieved results to an LLM for personalized product recommendations.',
                'Developed and deployed Flask-based backend services to handle user queries, orchestrate retrieval pipelines, and ensure a responsive and interactive user experience.'
            ],
        },
        {
            position: 'Graduate Engineer Trainee (Internship)',
            company: 'LTIMindtree Limited',
            duration: 'February 2023 – May 2023',
            location: 'Remote',
            responsibilities: [
                'Gained practical experience and insights into IT work and industry through the internship.',
                'Worked on Java and C# modules, including study materials and related tasks.',
                'Completed assigned activities on time based on study materials.'
                ],
        },
    ];

    const education = [
        {
            degree: 'B.Tech in Computer Science & Engineering',
            institution: 'Graphic Era Hill University',
            duration: '2019 – 2023',
            location: 'India',
            details: [
                'Graduated with 86.80% marks',
                'Focused on programming, algorithms, and software development',
                'Participated in technical competitions and coding challenges',
            ],
        },
        {
            degree: '12th Grade (CBSE)',
            institution: 'BLM Academy',
            duration: '2018 – 2019',
            location: 'Haldwani, Uttarakhand, India',
            details: [
                'Achieved 63.60% marks',
                'Science stream with focus on Mathematics and Computer Science',
            ],
        },
        {
            degree: '10th Grade (CBSE)',
            institution: 'WhiteHall School',
            duration: '2016 – 2017',
            location: 'Haldwani, Uttarakhand, India',
            details: [
                'Achieved 8.0 CGPA out of 10',
            ],
        },
    ];

    const certifications = [
        {
            name: 'CodeKaze Challenge 2023',
            issuer: 'Coding Ninjas',
            year: '2023',
            description: 'National rank 1616 and Graduation Year rank 272',
        },
        {
            name: 'CodeKaze Challenge 2022',
            issuer: 'Coding Ninjas',
            year: '2022',
            description: 'National rank 3106',
        },
        {
            name: 'Codegoda Challenge 2022',
            issuer: 'Agoda',
            year: '2022',
            description: 'Global rank 505',
        },
        {
            name: 'The Fundamentals of Digital Marketing',
            issuer: 'Google Digital Garage',
            year: '2022',
            description: 'Completed the fundamentals of digital marketing in June 2022',
        },
    ];
    
    const projects = [
        {
            name: 'AI Discrepancy Highlighter',
            technologies: 'Python, YOLOv11, DeepseekOCR, OpenCV, Label Studio, Model Fine-Tuning, Coordinate Mapping',
            description: 'Built an AI-based discrepancy detection system to compare master and test 2D engineering drawings by localizing parameters, extracting dimensions and tolerances, fine-tuning OCR models on annotated datasets, and highlighting deviations with 98%+ recognition accuracy.',
            image: dhImg
        },
        {
            name: 'Vaani – Workforce Self-Service AI',
            technologies: 'Python, Flask, LangChain, ChromaDB, HuggingFace Transformers, BGE Reranker, RAG, MySQL, MinIO, Prompt & SQL Guardrails',
            description: 'Developed a secure workforce self-service AI assistant for HR/IT policy retrieval, implementing authenticated access, semantic document pipelines, ranked retrieval with reranking, MySQL query guardrails, and employee-wise audit logging for reliable enterprise usage.',
            image: viImg
        },
        {
            name: 'AI Product Recommendation System',
            technologies: 'Python, Flask, LangChain, Beautifulsoup, Huggingface model, Openai, PostgreSQL, Streamlit, Docker',
            description: 'Built a RAG application by scraping Amazon data, handling CAPTCHA, applying hybrid chunking for text processing, and using hybrid search for efficient retrieval and augmented generation over the dataset.',
            image: aiImg
        },
        {
            name: "Impressico's Chatbot",
            technologies: 'Python, Flask, LangChain, PGvector, Beautifulsoup, OpenAI, PostgreSQL, Docker',
            description: 'Developed a personalized chatbot for the company, delivering tailored responses based on user queries and preferences. Deployed the solution using Flask for backend handling, ensuring a responsive, interactive user experience.',
            image: mlImg,
        },
        {
            name: 'Fact-Checker',
            technologies: 'Python, LangChain, CrewAI, Streamlit, Google Search API, GNews API, DuckDuckGo',
            description: 'A robust multi-agent fact-checking system that verifies claims using real-time web search and news sources, leveraging LangChain and CrewAI for agentic reasoning and accurate response generation.',
            image: cyImg
        },
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="about-intro">
                    I’m Gaurav Pandey, an AI Engineer with 2+ years of hands-on experience building production-grade AI applications. I have proven expertise in designing end-to-end AI solutions, including Retrieval-Augmented Generation (RAG), agentic workflows, and model fine-tuning. 
                    I have delivered industry-impacting solutions achieving 98%+ accuracy, along with secure enterprise self-service assistants. I bring a strong background in Python, Flask, FastAPI, LangChain, LangGraph, CrewAI, and agentic architectures, with deep experience in Generative AI (LLMs, RAG, Fine-Tuning), databases, and Docker, consistently transforming complex business problems into scalable, reliable, production-ready AI products.
                    </p>
                    <div className="contact-info-about">
                        <p><strong>Email:</strong> gaurav1237890@gmail.com</p>
                        <p><strong>Phone:</strong> +91-7017176107</p>
                        <p><strong>Location:</strong> Noida, Uttar Pradesh 201301</p>
                    </div>
                </div>
            </section>

            <section className="skills-section">
                <div className="section-title">
                    <h2>My Skills</h2>
                    <p>Technologies and tools I work with</p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            skills={skill.skills}
                        />
                    ))}
                </div>
            </section>

            <section className="experience-section">
                <div className="section-title">
                    <h2>Work Experience</h2>
                    <p>My professional journey</p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            position={exp.position}
                            company={exp.company}
                            duration={exp.duration}
                            location={exp.location}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </div>
            </section>

            <section className="projects-section">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p>Showcasing my technical skills and creativity</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p className="tech-stack"><strong>Technologies:</strong> {project.technologies}</p>
                                <p>{project.description}</p>
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="education-section">
                <div className="section-title">
                    <h2>Education & Certifications</h2>
                    <p>My academic background and professional development</p>
                </div>
                <div className="education-grid">
                    <div className="education-column">
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <h4>{edu.degree}</h4>
                                <p className="institution">{edu.institution}</p>
                                <p className="duration">{edu.duration} | {edu.location}</p>
                                <ul>
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="cert-column">
                        <h3>Certifications & Courses</h3>
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <h4>{cert.name}</h4>
                                <p className="issuer">{cert.issuer} | {cert.year}</p>
                                <p className="description">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="soft-skills-section">
                <div className="section-title">
                    <h2>Soft Skills</h2>
                    <p>Professional qualities that drive my work</p>
                </div>
                <div className="soft-skills-grid">
                    <div className="soft-skill">Problem-Solving</div>
                    <div className="soft-skill">Team Collaboration</div>
                    <div className="soft-skill">Communication</div>
                    <div className="soft-skill">Time Management</div>
                    <div className="soft-skill">Adaptability</div>
                    <div className="soft-skill">Critical Thinking</div>
                    <div className="soft-skill">Attention to Detail</div>
                    <div className="soft-skill">Flexibility</div>
                    <div className="soft-skill">Analytical Thinking</div>
                    <div className="soft-skill">Continuous Learning</div>
                    <div className="soft-skill">Initiative & Proactivity</div>
                    <div className="soft-skill">Technical Aptitude</div>
                </div>
            </section>
        </div>
    );
};

export default About;
