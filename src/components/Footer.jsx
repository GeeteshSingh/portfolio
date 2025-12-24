import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub, faLinkedinIn, faTwitter, faFacebook,
    faFonticonsFi, faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: faGithub, url: 'https://github.com/GeeteshSingh', label: 'GitHub' },
        { icon: faLinkedinIn, url: 'https://linkedin.com/in/geetesh-singh', label: 'LinkedIn' },
        { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: faFacebook, url: 'https://facebook.com', label: 'Facebook' },
        { icon: faCodepen, url: 'https://codepen.io', label: 'CodePen' },
        { icon: faFonticonsFi, url: 'https://fiverr.com', label: 'Fiverr' },
        { icon: faEnvelope, url: 'mailto:singh.geetesh1998@gmail.com', label: 'Email' }
    ];

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="footer-content">
                <div className="footer-top">
                    {/* Resume Download */}
                    <motion.a
                        href="https://drive.google.com/file/d/1_6E4pV2eBGxz9Ah2j8FaJg3rqwjtG82e/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-resume-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FontAwesomeIcon icon={faDownload} />
                        Download My Resume
                    </motion.a>

                    {/* Social Links */}
                    <div className="footer-socials">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.label}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="footer-social-link"
                            >
                                <FontAwesomeIcon icon={link.icon} size="lg" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Geetesh Singh. Crafted with ❤️ and passion.</p>
                    <p className="footer-subtext">Built with React, Framer Motion & Creative Ideas 🚀</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
