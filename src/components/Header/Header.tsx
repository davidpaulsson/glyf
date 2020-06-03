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
          <button
            type="button"
            className={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(CurrentPage.NEWS);
            }}
          >
            News
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(CurrentPage.SETTINGS);
            }}
          >
            Settings
          </button>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
