import React from 'react';
import styles from './Header.module.css';
import { Link } from '@reach/router';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link to="/">Home</Link> <Link to="settings">Settings</Link>
    </nav>
  </header>
);

export default Header;
