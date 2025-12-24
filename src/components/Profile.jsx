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
import profileImage from '../assests/me2.png';

const Profile = () => {
    const navigate = useNavigate();
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            setGradientPosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

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
        { key: 'facebook', icon: faFacebookF, url: 'https://facebook.com/geeteshsin', label: 'Facebook' },
        { key: 'github', icon: faGithub, url: 'https://github.com/GeeteshSingh', label: 'GitHub' },
        { key: 'twitter', icon: faTwitter, url: 'https://x.com', label: 'Twitter' },
        { key: 'linkedin', icon: faLinkedinIn, url: 'https://linkedin.com/in/geeteshsingh', label: 'LinkedIn' },
        { key: 'codepen', icon: faCodepen, url: 'https://codepen.io/geeteshsingh', label: 'CodePen' },
        { key: 'leetcode', icon: faCode, url: 'https://leetcode.com/u/GeeteshSingh/', label: 'LeetCode' },
        { key: 'email', icon: faEnvelope, url: 'mailto:singh.geetesh1998@gmail.com', label: 'Email' }
    ];

    return (
        <div className="profile-wrapper">
            {/* moving glow */}
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
                    {/* Jarvis image side */}
                    <motion.div variants={itemVariants} className="profile-image-wrapper">
                        <motion.div
                            className="jarvis-ring jarvis-ring-outer"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="jarvis-ring jarvis-ring-inner"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        />
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
                        <motion.img
                            src={profileImage}
                            alt="Geetesh Singh"
                            loading="lazy"
                            className="profile-image"
                            variants={imageVariants}
                            whileHover="hover"
                        />
                    </motion.div>

                    {/* Text side */}
                    <motion.div variants={itemVariants} className="profile-text">
                        <motion.h1 className="gradient-text">
                            Hi, I'm <span>Geetesh Singh</span>
                        </motion.h1>
                        <motion.p className="subtitle">
                            Full Stack Developer | Data Engineer | DevOps Enthusiast
                        </motion.p>

                        {/* stats row */}
                        <motion.div
                            className="profile-stats"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="stat-pill" variants={itemVariants}>
                                <span className="stat-number">4+</span>
                                <span className="stat-label">Years Experience</span>
                            </motion.div>
                            <motion.div className="stat-pill" variants={itemVariants}>
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Projects</span>
                            </motion.div>
                            <motion.div className="stat-pill" variants={itemVariants}>
                                <span className="stat-number">Data · DevOps · FE</span>
                                <span className="stat-label">End‑to‑end delivery</span>
                            </motion.div>
                        </motion.div>

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
                                    className={`social-icon social-${link.key}`}
                                    title={link.label}
                                >
                                    <FontAwesomeIcon icon={link.icon} size="2x" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* scroll hint */}
            <motion.div
                className="scroll-hint"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1.2,
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            >
                <span>Scroll to explore</span>
                <span className="scroll-arrow">↓</span>
            </motion.div>
        </div>
    );
};

export default Profile;
