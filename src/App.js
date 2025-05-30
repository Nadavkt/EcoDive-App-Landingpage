import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './Header/NavBar/navbar';
import Plate from './Header/Plate/plate';
import About from './Content/About/about';
import Contact from './Content/Contact-Us/contact_us';
import Download from './Download/download';
import { staggerContainer } from './animations';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="App"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Plate />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Contact />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Download />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
