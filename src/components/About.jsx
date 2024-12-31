// About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about" className="about-section">
            <div className="card">
                <h2>About Me</h2>
                <p>I am a focused and driven professional with over 4 years of experience in software engineering, where
                    I’ve had the opportunity to grow and achieve multiple promotions at Wipro Limited. My journey has
                    been shaped by a commitment to delivering exceptional software solutions, collaborating closely with
                    teams and stakeholders to understand requirements, and ensuring timely, high-quality outcomes.

                    I am often recognized for my deep expertise in asynchronous messaging, REST web services, cloud
                    services, and multi-tenant software platforms. With a creative and analytical approach to
                    problem-solving, I strive to write clean, efficient, and testable code that consistently exceeds
                    expectations. My goal is to continue pushing boundaries, learning new technologies, and contributing
                    to impactful projects that make a difference.</p>
            </div>
            <div className="card">
                <h2>Skills/Tools</h2>
                <ul className="skills-list">
                    <li><strong>Programming Languages:</strong> Java, Python, JavaScript</li>
                    <li><strong>Backend Development:</strong> SpringBoot (Primary Focus), REST API, Microservices</li>
                    <li><strong>Frontend Development:</strong> ReactJS, React Native, Expo, HTML, CSS, Bootstrap</li>
                    <li><strong>Data Engineering & ETL:</strong> AbInitio, Spark, Databricks, MySQL, Kafka, IBM Data
                        Stage
                    </li>
                    <li><strong>DevOps & Cloud:</strong> Docker, Bash Scripting, OpenSSL, Crontab</li>
                    <li><strong>Monitoring & Analysis:</strong> Grafana, Kibana, SQL Explorer, Splunk, Apache JMeter,
                        Excel
                    </li>
                    <li><strong>Other Tools & Technologies:</strong> Firebase, Netlify, Vercel</li>
                    <li><strong>Operating Systems:</strong> Windows, macOS, Unix, Ubuntu</li>
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

export default About;
