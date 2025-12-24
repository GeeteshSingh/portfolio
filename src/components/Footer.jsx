import React from 'react';
import './Footer.css';

const Footer = () => {
    const now = new Date();
    const formatted = now.toLocaleString('en-IN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return (
        <footer className="footer">
            <p>© 2025 Geetesh Singh. Crafted with ❤️ and passion.</p>
            <p className="footer-date">{formatted}</p>
        </footer>
    );
};

export default Footer;
