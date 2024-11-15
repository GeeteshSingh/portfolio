// import React from 'react';
// import './Projects.css';
//
// const Projects = () => {
//     return (
//         <div id="projects" className="projects-section">
//             <h2 style={{marginTop:"90px", alignContent: 'center'}}>Some of my projects include</h2>
//
//             <div className="card">
//                 <p>I'm a passionate developer with a love for creating meaningful and efficient solutions. Always eager
//                     to learn new technologies and improve my skills.</p>
//             </div>
//             <div className="card">
//                 <h2>Skills/Tools</h2>
//                 <ul className="skills-list">
//                     <li>JavaScript</li>
//                     <li>React</li>
//                     <li>Node.js</li>
//                     <li>Python</li>
//                     <li>SQL</li>
//                     {/* Add more skills/tools here */}
//                 </ul>
//             </div>
//             <div className="card">
//                 <h2>Hobbies/Interests</h2>
//                 <p>I enjoy cycling, playing badminton, and exploring new technologies. My interests include AI, data
//                     science, and learning about web development frameworks.</p>
//             </div>
//         </div>
//     );
// };
//
// export default Projects;

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

                // Sort by last updated date (most recent first)
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
        <div className="projects-container">
            <h2>My Projects</h2>
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
