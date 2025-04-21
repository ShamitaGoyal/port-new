import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './hamburgermenu.css';
import { Slant as Hamburger } from 'hamburger-react';
import resume from '../../assets/imgs/swe-24.pdf'


export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 580) {
        setOpen(false); // Close the menu
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <button className="menu-toggle">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" direction="left" size={18} />
      </button>

      <motion.div
        className="side-menu"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <ul>
          <li><a href="/#projects">Work</a></li>
          <li><a href="/about">About</a></li>
          <li><a href={resume} target="_blank">Resume</a></li>
          {/* <li><a href="#">Contact</a></li> */}
        </ul>
      </motion.div>
    </div>
  );
}
