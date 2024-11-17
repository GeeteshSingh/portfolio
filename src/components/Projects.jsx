import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/GeeteshSingh/repos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                setProjects(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects-container" style={{paddingTop: '100px'}}>
            <h2 style={{textAlign:"center"}}>My Projects</h2>

            <div className="projects-list">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    <div className="cards">
                        {projects.map((project) => (
                            <div key={project.id} className="card">
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    <h3>{project.name}</h3>
                                    <p>{project.description || 'No description available'}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
