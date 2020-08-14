import React, { useContext } from 'react';
import { actions, store } from '../store';
import newsSectionStyles from '../pages/News/NewsSection.module.css';
import styles from './Settings.module.css';
import packageJson from '../../package.json';

const Settings: React.FC = () => {
  const { state, dispatch } = useContext(store);

  return (
    <aside>
      <div className={newsSectionStyles.title}>
        <h1>Settings</h1>
      </div>

      <label>
        <input
          type="checkbox"
          checked={state.settings.openLinksInNewTab}
          onChange={() => {
            dispatch({
              type: actions.SET_OPEN_LINKS_IN_NEW_TAB,
              payload: !state.settings.openLinksInNewTab,
            });
          }}
        />
        Open links in new browser tab
      </label>

      <label>
        <input
          type="checkbox"
          checked={state.settings.useSystemPreferenceDarkMode}
          onChange={() => {
            dispatch({
              type: actions.SET_SYSTEM_DARK_MODE,
              payload: !state.settings.useSystemPreferenceDarkMode,
            });
          }}
        />
        Switch to dark mode based on system preference
      </label>

      <div
        className={newsSectionStyles.title}
        style={{ marginTop: 'calc(var(--spacing) * 4)' }}
      >
        <h2>Info</h2>
      </div>
      <div className={styles.info}>
        <p>
          Glyf (current version {packageJson.version}) is developed by{' '}
          <a href="https://twitter.com/davidpaulsson">@davidpaulsson</a>. For
          issues, feature requests and so on, please visit{' '}
          <a href="https://github.com/davidpaulsson/glyf">
            github.com/davidpaulsson/glyf
          </a>{' '}
          and submit an issue. Thank you for using Glyf!
        </p>
      </div>
    </aside>
  );
};

export default Settings;
