import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import BatmanLogo from '../assests/batman.png';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.querySelector('header').classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('header').classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="logo">
                <Link to="/">
                    <img src={BatmanLogo} alt="Batman Logo" style={{width: '50px', height: '50px'}}/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <button>
                <picture onClick={toggleTheme} style={{backgroundColor: "#000"}}>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f52e/512.webp" type="image/webp"/>
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f52e/512.gif" alt="🔮" width="32"
                         height="32"/>
                </picture>
            </button>
        </header>
    );
};

export default Header;