import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [displayCount, setDisplayCount] = useState(9); // Show 9 projects initially

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/GeeteshSingh/repos?per_page=50&sort=updated');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setProjects(data); // Show all repos, not just 6
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { y: -8, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)' }
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const displayedProjects = projects.slice(0, displayCount);
    const hasMore = displayCount < projects.length;

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <motion.h2
                    className="section-title"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Featured Projects
                </motion.h2>

                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '4rem 2rem' }}
                    >
                        <motion.div
                            className="loading-spinner"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        />
                        <p>Loading projects...</p>
                    </motion.div>
                )}

                {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}

                {!loading && !error && (
                    <>
                        <motion.div
                            className="projects-grid"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {displayedProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="project-card"
                                    variants={cardVariants}
                                    whileHover="hover"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="card-header">
                                        <h3>{project.name}</h3>
                                        {project.topics.length > 0 && (
                                            <div className="topics">
                                                {project.topics.slice(0, 3).map((topic, i) => (
                                                    <span key={i} className="topic-tag">
                            {topic}
                          </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <p className="description">{project.description || 'No description available'}</p>
                                    <div className="card-footer">
                                        <a
                                            href={project.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="icon-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiGithub /> View Code
                                        </a>
                                        {project.homepage && (
                                            <a
                                                href={project.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="icon-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FiExternalLink /> Live Site
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {hasMore && (
                            <motion.div
                                style={{ textAlign: 'center', marginTop: '3rem' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <motion.button
                                    className="load-more-btn"
                                    onClick={() => setDisplayCount(prev => prev + 6)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Load More Projects ({displayCount}/{projects.length})
                                </motion.button>
                            </motion.div>
                        )}

                        {projects.length === 0 && !loading && !error && (
                            <p style={{ textAlign: 'center', padding: '2rem' }}>No projects found</p>
                        )}
                    </>
                )}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal"
                            initial={{ scale: 0.5, y: 100 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 100 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-btn"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>
                            <h2>{selectedProject.name}</h2>
                            <p>{selectedProject.description || 'No description available'}</p>
                            <div className="modal-stats">
                                <div className="stat">
                                    <span className="label">⭐ Stars</span>
                                    <span className="value">{selectedProject.stargazers_count}</span>
                                </div>
                                <div className="stat">
                                    <span className="label">🍴 Forks</span>
                                    <span className="value">{selectedProject.forks_count}</span>
                                </div>
                                <div className="stat">
                                    <span className="label">💻 Language</span>
                                    <span className="value">{selectedProject.language || 'N/A'}</span>
                                </div>
                            </div>
                            <a
                                href={selectedProject.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub →
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
