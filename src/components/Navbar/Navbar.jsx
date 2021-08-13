import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <ul className={styles.NavList}>
        <li className={styles.NavListItem}>
          <Link to="/" className={styles.NavLink}>
            Home
          </Link>
        </li>
        <li className={styles.NavListItem}>
          <Link to="/about" className={styles.NavLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
