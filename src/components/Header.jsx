import React, {useState, useEffect} from 'react';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BatmanLogo from '../assests/batman.png';

const Header = () => {
    // State to toggle dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to toggle body class when the mode changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    // Toggle function to switch between light and dark modes
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header>
            <div className="logo">
    <span>
        <a href="#home">
<img src={BatmanLogo} alt="Batman Logo" style={{width: '50px', height: '50px'}}/>
        </a>
    </span>
            </div>

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}/>
                <span role="img" aria-label="theme-toggle">
                    {isDarkMode ? "☀️" : "🌙"}
                </span>
            </button>
        </header>
    );
};

export default Header;
