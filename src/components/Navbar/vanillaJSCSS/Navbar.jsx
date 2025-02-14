import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({
    logo,
    brandName = 'Brand',
    links = [],
    className = '',
    isResponsive = true,
    theme = 'light',
    onLinkClick,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (link) => {
        if (onLinkClick) {
            onLinkClick(link);
        }
        if (isResponsive) {
            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar ${theme} ${className}`} role="navigation" aria-label="main navigation">
            <div className="navbar-container">
                <div className="navbar-brand">
                    {logo ? (
                        <img 
                            src={logo} 
                            alt={`${brandName} logo`} 
                            className="navbar-logo"
                        />
                    ) : (
                        <img 
                            src="/api/placeholder/40/40" 
                            alt="Placeholder logo" 
                            className="navbar-logo"
                        />
                    )}
                    <span className="navbar-brand-name">{brandName}</span>
                </div>

                {isResponsive && (
                    <button 
                        className={`navbar-toggle ${isOpen ? 'open' : ''}`}
                        aria-label="menu"
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="toggle-bar"></span>
                        <span className="toggle-bar"></span>
                        <span className="toggle-bar"></span>
                    </button>
                )}

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