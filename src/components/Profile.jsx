import React, {useState} from 'react';
import './Profile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCode, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import ReactEmojis from "@souhaildev/reactemojis";

const Profile = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
        document.querySelector('.profile-container').classList.toggle("dark-mode", !isDarkMode);
        document.querySelector('header').classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <div id="home" className={`profile-container ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="profile-info-container">
                <img src="/me.png" alt="Profile" className="profile-image"/>
                <div className="profile-info">
                    <h1>Hi, I'm Geetesh
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
                                    type="image/webp"/>
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif" alt="👋"
                                 width="42" height="47"/>
                        </picture>
                    </h1>
                    <p>🧑🏻‍💻 a Developer.</p>
                    <p>🌍 based in the India</p>
                    <p>📧 singh.geetesh1998@gmail.com</p>
                </div>
            </div>
            <div className="social-links">
                <a href="https://www.facebook.com/geeteshsin/" target="_blank" className="contact-details"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="https://github.com/GeeteshSingh" target="_blank" className="contact-details"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://mobile.twitter.com/_Geeteshsingh" target="_blank" className="contact-details"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://www.linkedin.com/in/geeteshsingh/" target="_blank" className="contact-details">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>

                <a href="https://leetcode.com/u/GeeteshSingh/" target="_blank" className="contact-details">
                    <FontAwesomeIcon icon={faCode}/>
                </a>

                <a href="mailto:singh.geetesh98@gmail.com" target="_blank" className="contact-details"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </div>
        </div>
    );
};

export default Profile;
