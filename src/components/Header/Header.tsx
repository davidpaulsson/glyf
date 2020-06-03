import React, { Dispatch, SetStateAction } from 'react';
import styles from './Header.module.css';
import { CurrentPage } from '../../types';

interface HeaderProps {
  setCurrentPage: Dispatch<SetStateAction<CurrentPage>>;
}

const Header = ({ setCurrentPage }: HeaderProps) => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.ul}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(CurrentPage.NEWS);
            }}
          >
            News
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(CurrentPage.SETTINGS);
            }}
          >
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
