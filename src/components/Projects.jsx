// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="projects-section">
            <h2 style={{marginTop:"90px", alignContent: 'center'}}>Some of my projects include</h2>

            <div className="card">
                <p>I'm a passionate developer with a love for creating meaningful and efficient solutions. Always eager
                    to learn new technologies and improve my skills.</p>
            </div>
            <div className="card">
                <h2>Skills/Tools</h2>
                <ul className="skills-list">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL</li>
                    {/* Add more skills/tools here */}
                </ul>
            </div>
            <div className="card">
                <h2>Hobbies/Interests</h2>
                <p>I enjoy cycling, playing badminton, and exploring new technologies. My interests include AI, data
                    science, and learning about web development frameworks.</p>
            </div>
        </div>
    );
};

export default Projects;
