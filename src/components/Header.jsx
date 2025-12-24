import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub, faLinkedinIn, faTwitter, faFacebook,
    faFonticonsFi, faCodepen
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedMode);
        applyTheme(savedMode);
    }, []);

    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        applyTheme(newMode);
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const navItemVariants = {
        hover: { y: -2, color: '#00d4ff' }
    };

    const socialLinks = [
        { icon: faGithub, url: 'https://github.com/GeeteshSingh', label: 'GitHub', color: '#fff' },
        { icon: faLinkedinIn, url: 'https://linkedin.com/in/geetesh-singh', label: 'LinkedIn', color: '#0077B5' },
        { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
        { icon: faFacebook, url: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
        { icon: faCodepen, url: 'https://codepen.io', label: 'CodePen', color: '#000' },
        { icon: faFonticonsFi, url: 'https://fiverr.com', label: 'Fiverr', color: '#1DBF73' }
    ];

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' }
    ];

    return (
        <motion.header
            className="header"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="header-container">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/">GS</Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <ul className="nav-links">
                        {navItems.map((item, i) => (
                            <motion.li key={i} variants={navItemVariants} whileHover="hover">
                                <Link to={item.path}>{item.label}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="header-socials">
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.label}
                            whileHover={{ scale: 1.2, color: link.color }}
                            whileTap={{ scale: 0.9 }}
                            className="social-link"
                        >
                            <FontAwesomeIcon icon={link.icon} />
                        </motion.a>
                    ))}
                </div>

                {/* Resume Button */}
                <motion.a
                    href="https://drive.google.com/file/d/YOUR_RESUME_LINK/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 212, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon icon={faDownload} />
                    Resume
                </motion.a>

                {/* Theme Toggle */}
                <motion.button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <motion.nav
                className="nav-mobile"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <ul>
                    {navItems.map((item, i) => (
                        <motion.li key={i} whileHover={{ x: 10 }}>
                            <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Social Links */}
                <div className="mobile-socials">
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.label}
                            whileHover={{ scale: 1.1 }}
                            className="mobile-social-link"
                        >
                            <FontAwesomeIcon icon={link.icon} size="lg" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Resume Button */}
                <motion.a
                    href="https://drive.google.com/file/d/1_6E4pV2eBGxz9Ah2j8FaJg3rqwjtG82e/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-resume-btn"
                    whileHover={{ scale: 1.02 }}
                >
                    <FontAwesomeIcon icon={faDownload} /> Download Resume
                </motion.a>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
