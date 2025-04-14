import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ id, text, url }) => {
  const style = { textTransform: 'uppercase', fontSize: '1.5rem' };

  return (
    <motion.li className="hamburger-li"
      variants={variants}
      whileHover={{ opacity: 0.5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-placeholder" style={style}>
        <a 
          href={url} 
          className="text" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </div>
    </motion.li>
  );
};
