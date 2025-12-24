import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useCursorPosition from '../hooks/useCursorPosition';
import profileImage from '../assests/me.png';

const Profile = () => {
    const navigate = useNavigate();
    const mousePosition = useCursorPosition();
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateGradient = () => {
            setGradientPosition({
                x: (mousePosition.x / window.innerWidth) * 100,
                y: (mousePosition.y / window.innerHeight) * 100
            });
        };
        updateGradient();
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
        hover: { scale: 1.05 }
    };

    const socialLinks = [
        { icon: faGithub, url: 'https://github.com/GeeteshSingh', label: 'GitHub' },
        { icon: faLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: faEnvelope, url: 'mailto:singh.geetesh1998@gmail.com', label: 'Email' }
    ];

    return (
        <div className="profile-wrapper">
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
                    <motion.div variants={itemVariants} className="profile-image-wrapper">
                        <motion.img
                            src={profileImage}
                            alt="Geetesh Singh"
                            className="profile-image"
                            variants={imageVariants}
                            whileHover="hover"
                        />
                        <motion.div className="image-ring" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
                    </motion.div>

                    <motion.div variants={itemVariants} className="profile-text">
                        <motion.h1 className="gradient-text">
                            Hi, I'm <span>Geetesh Singh</span>
                        </motion.h1>
                        <motion.p className="subtitle">
                            Full Stack Developer | React Native Specialist | Creative Builder
                        </motion.p>
                        <motion.p className="description">
                            I craft beautiful, functional digital experiences with cutting-edge technologies. Passionate about clean code, user-centric design, and innovative solutions.
                        </motion.p>

                        {/* CTA Buttons - FIXED */}
                        <motion.div className="cta-buttons" variants={containerVariants} initial="hidden" animate="visible">
                            <motion.button
                                className="btn btn-primary"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/projects')}
                            >
                                View My Work
                            </motion.button>
                            <motion.a
                                href="mailto:singh.geetesh1998@gmail.com"
                                className="btn btn-secondary"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Social Links - FIXED with real URLs */}
                        <motion.div className="social-links" variants={containerVariants} initial="hidden" animate="visible">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.3, y: -5 }}
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
