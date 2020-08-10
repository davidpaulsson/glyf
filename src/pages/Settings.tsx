import React, { useContext } from 'react';
import { actions, store } from '../store';

const Settings: React.FC = () => {
  const { state, dispatch } = useContext(store);

  return (
    <aside>
      <h1>Settings</h1>

      <label>
        Open links in new browser tab
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
      </label>

      <label>
        Dark mode
        <input
          type="checkbox"
          checked={state.settings.isDarkMode}
          onChange={() => {
            dispatch({
              type: actions.SET_IS_DARK_MODE,
              payload: !state.settings.isDarkMode,
            });
          }}
        />
      </label>
    </aside>
  );
};

export default Settings;
