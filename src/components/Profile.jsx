import React from 'react';
import './Profile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-info-container">
                <img src="/me.png" alt="Profile" className="profile-image"/>
                <div className="profile-info">
                    <h1>Hi, I'm Geetesh</h1>
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
                <a href="mailto:singh.geetesh98@gmail.com" target="_blank" className="contact-details"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>

            </div>
        </div>
    );
};

export default Profile;
