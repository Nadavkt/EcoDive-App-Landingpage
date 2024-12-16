import  './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const NavBar = () => {
    return ( 
        <header className="navbar-container">
            <div className="navbar-logo">
                <a href="/">EcoDive</a>
            </div>
            <nav className="navbar-options">
                <ul>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact-Us</a></li>
                    <li><a href="/Download">Download</a></li>
                </ul>
            </nav>
            <div className="navbar-socials">
                <a className='facebook' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="0.5x" />
                </a>
                <a className='instgram' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="0.5x" />
                </a>
            </div>
        </header>
     );
}
 
export default NavBar;