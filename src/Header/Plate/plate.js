import React from 'react';
import './plate.css';
import { Link } from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../animations';

const Plate = () => {
    return ( 
        <Parallax speed={10}>
            <motion.div 
                className="plateWrapper" 
                id='home'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn('up')}
            >
                <div className="backgroundImage">
                    <motion.div 
                        className="text-plate"
                        variants={slideIn}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.8,
                                delay: 0.5,
                                ease: "easeOut"
                            }}
                        >
                            A small step for humanity,<br/> a Big step for the Environment
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        className="button-plate"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.5,
                            delay: 1,
                            type: "spring",
                            stiffness: 200
                        }}
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