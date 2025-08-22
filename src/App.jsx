import './App.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; 
import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>

      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <Contact> </Contact>

      <motion.footer
      className='footer'
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      >
      <p> &copy; 2025 Pranjal Portfolio , All rights reserved. </p>
      </motion.footer>

    </div>
  )
}

export default App
