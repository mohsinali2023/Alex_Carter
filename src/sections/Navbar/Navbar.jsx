import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';
import { Menu, X } from 'lucide-react'; // icon library (install with: npm install lucide-react)

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Alex</div>

      {/* Mobile Toggle */}
      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu */}
      <ul className={`${styles.menu} ${open ? styles.showMenu : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
