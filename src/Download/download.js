import './download.css';
import iphoneImg from '../Assets/ecodive-iphone-display.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';


const Download = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
                delay: 0.6
            }
        }
    };

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    return ( 
        <motion.div 
            className="download-wrapper" 
            id='download'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div 
                className="download-content"
                variants={slideInFromLeft}
            >
                <motion.div 
                    className="download-content-info"
                    variants={fadeInUp}
                >
                    <p>
                        Dive Smarter, Dive Greener!<br/> Download our app today and revolutionize the way <br/> you manage your dives.<br/>
                        Say goodbye to paper logs and hello to a <br/>sustainable, digital dive log accessible anytime,<br/> anywhere.<br/> 
                        Stay organized, get reminders for dives and <br/>insurance renewals, and connect with top diving<br/> clubs - all from the convenience of your phone.<br />
                        Your journey to a cleaner ocean starts here.
                    </p>
                </motion.div>
                <motion.div 
                    className="download-content-title"
                    variants={fadeInUp}
                >
                    <h1>Download now !</h1>
                </motion.div>
                <motion.div 
                    className="download-content-links"
                    variants={fadeInUp}
                >
                    <motion.div 
                        className='download-content-link-appstore'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="https://apps.apple.com/il/app/ecodive/id6753789848EcoDive">
                        For Iphone 
                        <FontAwesomeIcon icon={faApple} size="2x" style={{marginLeft: '15px', marginBottom: '5px'}} /></a>
                    </motion.div>
                    <motion.div 
                        className='download-content-link-googleplay'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="/">For Android <FontAwesomeIcon icon={faGooglePlay} size="2x" style={{marginLeft: '15px', marginBottom: '5px'}}/></a>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="download-wrapper-device"
                variants={slideInFromRight}
            >
                <motion.img 
                    src={iphoneImg} 
                    alt="Application On The Iphone"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
     );
}
 
export default Download;