import  './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const navLinks = [
    { id: 1, to: 'home'},
    { id: 2, to: 'about', label: 'About' },
    { id: 3, to: 'contact', label: 'Contact-Us' },
    { id: 4, to: 'download', label: 'Download' },
];

const NavBar = () => {
    return ( 
        <header className="navbar-container">
            <div className="navbar-logo">
                <li>
                    <Link to="home" smooth={true} offset={-80} duration={750}>EcoDive</Link>
                </li> 
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
        </header>
     );
}
 
export default NavBar;