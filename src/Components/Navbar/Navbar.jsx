import React from 'react';
import Logo from './Logo.jsx';
import Sidenav from './Sidenav.jsx';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <article>
            <Logo/>
            <Sidenav/>
        </article>
    </div>
  )
}

export default Navbar
