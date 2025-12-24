import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faFacebookF,
    faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import useCursorPosition from '../hooks/useCursorPosition';
import profileImage from '../assests/me.png';

const Profile = () => {
    const navigate = useNavigate();
    const mousePosition = useCursorPosition();
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setGradientPosition({
            x: (mousePosition.x / window.innerWidth) * 100,
            y: (mousePosition.y / window.innerHeight) * 100
        });
    }, [mousePosition]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        hover: { scale: 1.03 }
    };

    const socialLinks = [
        { icon: faFacebookF, url: 'https://www.facebook.com/geeteshsin', label: 'Facebook' },
        { icon: faGithub, url: 'https://github.com/GeeteshSingh', label: 'GitHub' },
        { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: faLinkedinIn, url: 'https://linkedin.com/in/geeteshsingh', label: 'LinkedIn' },
        { icon: faCodepen, url: 'https://codepen.io/geeteshsingh', label: 'CodePen' },
        { icon: faCode, url: 'https://leetcode.com/u/GeeteshSingh/', label: 'LeetCode' },
        { icon: faEnvelope, url: 'mailto:singh.geetesh1998@gmail.com', label: 'Email' }
    ];

    return (
        <div className="profile-wrapper">
            {/* global moving glow */}
            <motion.div
                className="gradient-blob"
                style={{
                    left: `${gradientPosition.x}%`,
                    top: `${gradientPosition.y}%`
                }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            />

            <section className="profile">
                <motion.div
                    className="profile-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Jarvis image module */}
                    <motion.div variants={itemVariants} className="profile-image-wrapper">
                        {/* outer rotating ring */}
                        <motion.div
                            className="jarvis-ring jarvis-ring-outer"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                        />
                        {/* inner rotating ring (reverse) */}
                        <motion.div
                            className="jarvis-ring jarvis-ring-inner"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        />
                        {/* corner HUD blocks */}
                        <motion.div
                            className="jarvis-scanner scanner-top-left"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="jarvis-scanner scanner-bottom-right"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />

                        {/* actual photo */}
                        <motion.img
                            src={profileImage}
                            alt="Geetesh Singh"
                            className="profile-image"
                            variants={imageVariants}
                            whileHover="hover"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div variants={itemVariants} className="profile-text">
                        <motion.h1 className="gradient-text">
                            Hi, I'm <span>Geetesh Singh</span>
                        </motion.h1>
                        <motion.p className="subtitle">
                            Full Stack Developer | Data Engineer | DevOps Enthusiast
                        </motion.p>
                        <motion.p className="description">
                            I craft reliable data pipelines, cloud‑native systems and modern web experiences
                            using technologies like Kafka, AWS, React and CI/CD automation.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="cta-buttons"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.button
                                className="btn btn-primary cta-full"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/projects')}
                            >
                                View My Work
                            </motion.button>

                            <motion.a
                                href="mailto:singh.geetesh1998@gmail.com"
                                className="btn btn-secondary cta-full"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* socials */}
                        <motion.div
                            className="social-links"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.25, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="social-icon"
                                    title={link.label}
                                >
                                    <FontAwesomeIcon icon={link.icon} size="2x" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default Profile;
