import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const saved = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(saved);
        applyTheme(saved);
    }, []);

    const applyTheme = (isDark) => {
        if (isDark) document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
    };

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        localStorage.setItem('darkMode', String(next));
        applyTheme(next);
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' }
    ];

    return (
        <motion.header
            className="header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="header-container">
                <div className="logo">
                    <Link to="/">GS</Link>
                </div>

                <nav className="nav-desktop">
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li
                                key={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-right">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen((v) => !v)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="nav-mobile">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </motion.header>
    );
};

export default Header;
