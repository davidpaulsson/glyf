import classNames from 'classnames';
import React, { useContext } from 'react';
import { store } from '../../store';
import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  const { state } = useContext(store);

  return (
    <div
      className={classNames({
        [styles.grid]: true,
        darkMode: state.settings.isDarkMode,
      })}
    >
      {children}
    </div>
  );
};

export default Layout;
