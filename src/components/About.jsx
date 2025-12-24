import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import {
    // Programming
    SiPython, SiJavascript, SiTypescript,
    // Frontend
    SiReact, SiExpo, SiHtml5, SiCss3, SiBootstrap, SiStreamlit,
    // Backend
    SiSpringboot,
    // DevOps & Cloud
    SiAmazonaws, SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiGithubactions, SiGitlab,
    // Data & ETL
    SiApachespark, SiMysql, SiDatabricks,
    // Monitoring
    SiPrometheus, SiGrafana, SiElastic,
    // Tools
    SiGit, SiGithub, SiUbuntu, SiWindows, SiApple
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiApachekafka } from 'react-icons/si';

const About = () => {
    const [activeTab, setActiveTab] = useState('about');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.15 }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.03, duration: 0.25 }
        }),
        hover: { scale: 1.12, y: -6 }
    };

    const timelineVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    // ========= RESUME‑BASED TECH STACK ========= [file:63]
    const techSections = [
        {
            title: 'Programming & Scripting',
            items: [
                { name: 'Python', icon: SiPython, color: '#3776AB' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                { name: 'Java', icon: FaJava, color: '#007396' }   // ✅ use FaJava component
            ]
        },
        {
            title: 'Frontend',
            items: [
                { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
                { name: 'React Native (Expo)', icon: SiExpo, color: '#000000' },
                { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
                { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
                { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
                { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' }
            ]
        },
        {
            title: 'Backend',
            items: [
                { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
                { name: 'REST APIs', icon: SiSpringboot, color: '#6DB33F' },
                { name: 'Microservices', icon: SiSpringboot, color: '#6DB33F' }
            ]
        },
        {
            title: 'DevOps & Cloud',
            items: [
                { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
                { name: 'Docker', icon: SiDocker, color: '#2496ED' },
                { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
                { name: 'Terraform', icon: SiTerraform, color: '#7B42F6' },
                { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
                { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
                { name: 'GitLab CI', icon: SiGitlab, color: '#FC6D26' }
            ]
        },
        {
            title: 'Data & ETL',
            items: [
                { name: 'Ab Initio', icon: SiApachespark, color: '#E25A1C' },
                { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C' },
                { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
                { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },  // ✅ component
                { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
            ]
        },
        {
            title: 'Monitoring & Logging',
            items: [
                { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
                { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
                { name: 'ELK Stack', icon: SiElastic, color: '#005571' }
            ]
        },
        {
            title: 'Tools & Platforms',
            items: [
                { name: 'Git', icon: SiGit, color: '#F05032' },
                { name: 'GitHub', icon: SiGithub, color: '#181717' },
                { name: 'Ubuntu', icon: SiUbuntu, color: '#E95420' },
                { name: 'Windows', icon: SiWindows, color: '#0078D6' },
                { name: 'macOS', icon: SiApple, color: '#AAAAAA' }
            ]
        }
    ];
    // ===========================================

    // ========= EXPERIENCE TIMELINE (Wipro) ========= [file:63]
    const experience = [
        {
            role: 'Software Engineer II / Data Engineer',
            company: 'Wipro Limited',
            location: 'Bengaluru, India',
            period: 'Jan 2023 – May 2025',
            highlights: [
                'Designed and deployed scalable ETL workflows on AWS, improving data processing efficiency by 25%.',
                'Integrated Kafka for real-time and batch data streaming across systems.',
                'Automated server health checks with Bash & Python, cutting manual effort by 40%.',
                'Optimized CI/CD pipelines using GitHub Actions and Ab Initio Control Center, boosting release speed by 30%.',
                'Collaborated with frontend teams to integrate APIs with ReactJS dashboards.'
            ],
            stack: ['AWS', 'Kafka', 'Ab Initio', 'Python', 'Bash', 'GitHub Actions', 'ReactJS']
        },
        {
            role: 'DevOps Engineer',
            company: 'Wipro Limited',
            location: 'Bengaluru, India',
            period: 'Jan 2022 – Jan 2023',
            highlights: [
                'Deployed and managed containerized apps with Docker & Kubernetes for scalability.',
                'Implemented Terraform and Ansible for infra automation, improving consistency.',
                'Built CI/CD pipelines with GitHub Actions, reducing deployment times by 35%.',
                'Enhanced observability with Grafana & CloudWatch to proactively catch issues.'
            ],
            stack: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'Grafana', 'CloudWatch']
        },
        {
            role: 'ETL Developer',
            company: 'Wipro Limited',
            location: 'Bengaluru, India',
            period: 'Mar 2021 – Jan 2022',
            highlights: [
                'Developed high‑performance ETL pipelines in Ab Initio, raising throughput by 20%.',
                'Optimized Kafka schemas (JSON, AVRO) for seamless data integration.',
                'Supported data migration to AWS for analytics & reporting.'
            ],
            stack: ['Ab Initio', 'Kafka', 'AWS', 'JSON', 'AVRO']
        }
    ];
    // ===============================================

    const interests = [
        'Playing badminton, cycling and walking to stay active.',
        'Exploring cloud platforms, DevOps tooling and observability stacks.',
        'Building side projects in React, React Native and data engineering.',
        'Staying updated on AI, big data and distributed systems.'
    ];

    const tabs = [
        { id: 'about', label: '👋 About' },
        { id: 'timeline', label: '📈 Experience' },
        { id: 'skills', label: '💡 Tech Stack' },
        { id: 'interests', label: '🎯 Interests' }
    ];

    const aboutText = `Data Engineer / Software Engineer with 4+ years of experience building and operating data pipelines, ETL workflows and cloud‑native systems.

Comfortable across data engineering, DevOps and frontend integration – from Kafka and Ab Initio on AWS to CI/CD, containerization and React dashboards.

Enjoys shipping production‑ready solutions, mentoring teammates and constantly experimenting with new tools and architectures.`;

    return (
        <section className="about">
            <div className="about-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="tabs-list">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'about' && (
                            <motion.div
                                key="about"
                                className="tab-content"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <p>{aboutText}</p>

                                <motion.a
                                    href="https://drive.google.com/file/d/1_6E4pV2eBGxz9Ah2j8FaJg3rqwjtG82e/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="about-resume-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span>Download Resume</span>
                                </motion.a>
                            </motion.div>
                        )}


                        {activeTab === 'timeline' && (
                            <motion.div
                                key="timeline"
                                className="tab-content timeline-content"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="timeline">
                                    <div className="timeline-line" />
                                    {experience.map((item, index) => (
                                        <motion.div
                                            key={item.role}
                                            className="timeline-item"
                                            variants={timelineVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="timeline-dot" />
                                            <div className="timeline-card">
                                                <div className="timeline-header">
                                                    <h3>{item.role}</h3>
                                                    <span className="timeline-period">{item.period}</span>
                                                </div>
                                                <p className="timeline-company">
                                                    {item.company} • {item.location}
                                                </p>
                                                <ul className="timeline-highlights">
                                                    {item.highlights.map((h) => (
                                                        <li key={h}>{h}</li>
                                                    ))}
                                                </ul>
                                                <div className="timeline-stack">
                                                    {item.stack.map((s) => (
                                                        <span key={s} className="stack-chip">
                              {s}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'skills' && (
                            <motion.div
                                key="skills"
                                className="tab-content skills-content"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {techSections.map((section, secIdx) => (
                                    <div key={section.title} className="skill-category-section">
                                        <h3 className="category-title">{section.title}</h3>
                                        <div className="skills-grid">
                                            {section.items.map((skill, i) => (
                                                <motion.div
                                                    key={skill.name}
                                                    className="skill-card"
                                                    custom={secIdx * 10 + i}
                                                    variants={skillVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    whileHover="hover"
                                                    title={skill.name}
                                                >
                                                    <skill.icon size={40} color={skill.color} />
                                                    <p>{skill.name}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'interests' && (
                            <motion.div
                                key="interests"
                                className="tab-content interests-content"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="interests-grid">
                                    {interests.map((interest, i) => (
                                        <motion.div
                                            key={interest}
                                            className="interest-card"
                                            custom={i}
                                            variants={skillVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover={{ scale: 1.05, x: 8 }}
                                        >
                                            {interest}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
