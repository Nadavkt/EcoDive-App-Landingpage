import React from 'react';
import './plate.css';
import { Link } from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Plate = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                delay: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    return ( 
        <Parallax speed={10}>
            <motion.div 
                className="plateWrapper" 
                id='home'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="backgroundImage">
                    <motion.div 
                        className="text-plate"
                        variants={itemVariants}
                    >
                        <motion.p
                            variants={itemVariants}
                        >
                            A small step for humanity,<br/> a Big step for the Environment
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="button-plate"
                        variants={buttonVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <li>
                            <Link to="download" smooth={true} offset={-80} duration={750}>
                                Download
                            </Link>
                        </li>
                    </motion.div>
                </div>
            </motion.div>
        </Parallax>
    );
}
 
export default Plate;