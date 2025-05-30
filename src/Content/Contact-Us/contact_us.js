import './contact_us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const ContactUs = () => {
    // Contact information
    const contactInfo = {
        location: {
            text: "Emanuel Haromi St 19, Tel Aviv, Israel",
            url: "https://www.google.com/maps?q=Emanuel+Haromi+St+19,+Tel+Aviv,+Israel",
            icon: faLocationDot
        },
        phone: {
            text: "234-9876-5400",
            url: "tel:2349876540",
            icon: faPhone
        },
        whatsapp: {
            text: "888-0123-4567",
            url: "https://wa.me/972524222403?text=Hello%20I%20would%20like%20to%20contact%20you",
            icon: faWhatsapp
        },
        email: {
            text: "hello@ecodive.com",
            url: "mailto:hello@ecodive.com",
            icon: faEnvelope
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.div 
            className="contact-container" 
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="contact-content">
                <motion.h2 
                    variants={itemVariants}
                    className="contact-title"
                >
                    Contact Us
                </motion.h2>
                
                <div className="contact-content-wrapper">
                    <div className="contact-info">
                        {Object.entries(contactInfo).map(([key, info], index) => (
                            <motion.a
                                key={key}
                                href={info.url}
                                className="contact-item"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={info.icon} />
                                </div>
                                <span>{info.text}</span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.form 
                        className="contact-form"
                        variants={itemVariants}
                    >
                        <motion.input 
                            type="text" 
                            placeholder="Enter your Name"
                            variants={itemVariants}
                        />
                        <motion.input 
                            type="email" 
                            placeholder="Enter a valid email address"
                            variants={itemVariants}
                        />
                        <motion.textarea 
                            placeholder="Your Message"
                            variants={itemVariants}
                        />
                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            SUBMIT
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactUs;