import React, { useState } from "react";
import "./About.css";

const About = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    const handleCloseModal = () => {
        setActiveCard(null);
    };

    return (
        <div className="about-section">
            <div className="cards-container">
                <div
                    className="card"
                    onClick={() => handleCardClick("about")}
                >
                    <h2>About Me</h2>
                    <div className="card-text">
                        <p>Brief summary about me ...</p>
                    </div>
                </div>

                <div
                    className="card"
                    onClick={() => handleCardClick("skills")}
                >
                    <h2>Skills/Tools</h2>
                    <div className="card-text">
                    <p>Click here to view my skills...</p>
                    </div>
                </div>

                <div
                    className="card"
                    onClick={() => handleCardClick("hobbies")}
                >
                    <h2>Hobbies/Interests</h2>
                    <div className="card-text">
                    <p>My hobbies include...</p>
                    </div>
                </div>
            </div>

            {activeCard && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>
                            Close
                        </button>
                        {activeCard === "about" && (
                            <>
                                <h2>About Me</h2>
                                <p>
                                    I am a focused and driven professional with over 4 years of
                                    experience in software engineering, where I’ve had the
                                    opportunity to grow and achieve multiple feats. My journey has
                                    been shaped by a commitment to delivering exceptional software
                                    solutions, collaborating closely with teams and stakeholders
                                    to understand requirements, and ensuring timely, high-quality
                                    outcomes.
                                </p>
                                <p>
                                    I am often recognized for my deep expertise in asynchronous
                                    messaging, REST web services, cloud services, and multi-tenant
                                    software platforms. With a creative and analytical approach to
                                    problem-solving, I strive to write clean, efficient, and
                                    testable code that consistently exceeds expectations. My goal
                                    is to continue pushing boundaries, learning new technologies,
                                    and contributing to impactful projects that make a difference.
                                </p>
                            </>
                        )}
                        {activeCard === "skills" && (
                            <>
                                <h2>Skills/Tools</h2>
                                <ul className="skills-list">
                                    <li>
                                        <strong>Programming Languages:</strong> Java, Python,
                                        JavaScript
                                    </li>
                                    <li>
                                        <strong>Backend Development:</strong> SpringBoot, REST API,
                                        Microservices
                                    </li>
                                    <li>
                                        <strong>Frontend Development:</strong> ReactJS, React
                                        Native, Expo, HTML, CSS, Bootstrap
                                    </li>
                                    <li>
                                        <strong>Data Engineering & ETL:</strong> AbInitio, Spark,
                                        Databricks, MySQL, Kafka, IBM Data Stage
                                    </li>
                                    <li>
                                        <strong>DevOps & Cloud:</strong> Docker, Bash Scripting,
                                        OpenSSL, Crontab
                                    </li>
                                    <li>
                                        <strong>Monitoring & Analysis:</strong> Grafana, Kibana, SQL
                                        Explorer, Splunk, Apache JMeter, Excel
                                    </li>
                                    <li>
                                        <strong>Other Tools & Technologies:</strong> Firebase,
                                        Netlify, Vercel
                                    </li>
                                    <li>
                                        <strong>Operating Systems:</strong> Windows, macOS, Unix,
                                        Ubuntu
                                    </li>
                                </ul>
                            </>
                        )}
                        {activeCard === "hobbies" && (
                            <>
                                <h2>Hobbies/Interests</h2>
                                <p>
                                    I enjoy cycling, playing badminton, and exploring new
                                    technologies. My interests include AI, data science, learning
                                    about web development frameworks, and reading comics.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
