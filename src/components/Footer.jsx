import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Template created with ❤️ by Geetesh © {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
