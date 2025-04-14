import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = [
  { id: "0", text: "Work", url: "https://yourworklink.com"},
  { id: "1", text: "About", url: "https://yourworklink.com" },
  { id: "2", text: "For Fun", url: "https://yourworklink.com"},
  { id: "3", text: "Resume", url: "https://yourworklink.com"},
];

export const Navigation = () => (
  <motion.ul variants={variants} className="hamburger-ul">
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} url={item.url} />
    ))}
  </motion.ul>
);
