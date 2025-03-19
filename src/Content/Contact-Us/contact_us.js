import './contact_us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';




const ContactUs = () => {

    // Text for the boxes 
    const locationName = "Emanuel Haromi St 19, Tel Aviv, Israel";
    const WhatsappInfoLogo = "Chat with us"
    const phoneCall = "Our customer service open for you"

    //Links for the boxes
    const googleMapUrl = `https://www.google.com/maps?q=Emanuel+Haromi+St+19,+Tel+Aviv,+Israel`;

    const whatsappUrl = `https://wa.me/972524222403?text=Hello%20I%20would%20like%20to%20contact%20you`;


    return ( 
        <div className="contact-wrapper" id='contact'>
            <div className='contact-title'><h1>Contact Us</h1></div>
            <a className="contact-linkoption" href={googleMapUrl} target="_blank" rel="noopener noreferrer">
                <div className="contact-logo">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="contact-infologo">{locationName}</div>
            </a>
            <a className="contact-linkoption" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <div className="contact-logo-wh">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div className="contact-infologo">{WhatsappInfoLogo}</div>
            </a>
            <div className="contact-linkoption" >
                <div className="contact-logo-ph">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-infologo">{phoneCall}</div>
            </div>
        </div>
    );
}
 
export default ContactUs;