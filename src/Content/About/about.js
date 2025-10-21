import './about.css';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                delay: 0.4
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
                delay: 0.4
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return ( 
        <motion.div 
            className="about-wrapper" 
            id='about'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h1 
                className="about-title"
                variants={itemVariants}
            >
                Dive into the Digital Age with Our Eco -<br/> Friendly Dive Log App
            </motion.h1>
            <motion.p 
                className="about-explanation"
                variants={itemVariants}
            >
                Are you tired of managing heaps of paperwork to document your dives or rent equipment? It's time to make a change that benefits both you and the environment. Our revolutionary app allows divers and diving clubs to transition from paper to a digital dive log—accessible anytime, anywhere, directly from your phone.
                As passionate advocates for ocean conservation, divers strive to keep our waters as clean as possible. By eliminating the need for paper logs and forms, we reduce environmental pollution caused by paper production. Embrace a sustainable solution that aligns with your commitment to the environment.
                With our app, you can:
            </motion.p>
            <motion.ul 
                className="about-dots"
                variants={containerVariants}
            >
                <motion.li variants={listItemVariants}>
                    Manage All Your Dives Digitally: Keep an organized, 
                    digital record of your dive history complete with stamps and certifications.
                </motion.li>
                <motion.li variants={listItemVariants}>
                    Receive Timely Reminders: Get notifications for upcoming dives and alerts when your dive insurance needs renewal.
                </motion.li>
                <motion.li variants={listItemVariants}>
                    Write and Read Reviews of Diving Clubs: Share your experiences and help others choose the best diving spots and services.
                </motion.li>
            </motion.ul>
            <motion.p 
                className="about-finishline"
                variants={itemVariants}
            >
                Make the leap into a more efficient and eco-friendly diving experience.<br /> Join us in taking a step forward for humanity and a giant leap for the environment.<br />
                 Dive smarter, dive greener!
            </motion.p>

        </motion.div>
     );
}
 
export default About;