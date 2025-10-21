import  './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const navLinks = [
    { id: 1, to: 'home'},
    { id: 2, to: 'about', label: 'About' },
    { id: 3, to: 'contact', label: 'Contact-Us' },
    { id: 4, to: 'download', label: 'Download' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen is mobile
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return ( 
        <>
            <header className="navbar-container">
                <div className="navbar-logo">
                    <Link to="home" smooth={true} offset={-80} duration={750}>EcoDive</Link>
                </div>
                <nav className="navbar-options">
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <Link to={link.to} smooth={true} offset={-80} duration={750}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="navbar-socials">
                    <a className='facebook' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="0.5x" />
                    </a>
                    <a className='instagram' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="0.5x" />
                    </a>
                    <a className='login' href="https://main.d29wkyrbvrv8ds.amplifyapp.com/" target="_blank" rel="noopener noreferrer" title="Admin System">
                        <FontAwesomeIcon icon={faSignInAlt} size="0.5x" />
                    </a>
                </div>
                <button className="mobile-menu-button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </header>

            {isMobile && isMenuOpen && (
                <div className="mobile-menu">
                    <button className="mobile-menu-close" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <Link to={link.to} smooth={true} offset={-80} duration={750} onClick={closeMenu}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://main.d29wkyrbvrv8ds.amplifyapp.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                <FontAwesomeIcon icon={faSignInAlt} /> Admin System
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
     );
}
 
export default NavBar;