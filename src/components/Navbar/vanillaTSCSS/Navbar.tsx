import React, { useState } from 'react';
import { NavbarProps, NavLink } from './types';
import './Navbar.css';

const defaultLinks: NavLink[] = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' }
];

const Navbar: React.FC<NavbarProps> = ({
    logo = '/api/placeholder/40/40',
    brandName = 'Brand Name',
    links = defaultLinks,
    className = '',
    isResponsive = true,
    theme = 'light',
    onLinkClick
    }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link: NavLink) => {
        if (isResponsive) {
            setIsOpen(false);
        }
        onLinkClick?.(link);
    };

    return (
        <nav className={`navbar ${theme} ${className} ${isOpen ? 'mobile-open' : ''}`}>
        <div className="navbar-container">
            <div className="navbar-brand">
            <img src={logo} alt={brandName} className="navbar-logo" />
            <span className="navbar-brand-name">{brandName}</span>
            
            {isResponsive && (
                <button 
                className={`navbar-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                >
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
                </button>
            )}
            </div>

            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            {links.map((link, index) => (
                <li key={index} className="navbar-item">
                <a 
                    href={link.href}
                    className="navbar-link"
                    onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                    }}
                >
                    {link.icon && <span className="navbar-link-icon">{link.icon}</span>}
                    {link.text}
                </a>
                </li>
            ))}
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
