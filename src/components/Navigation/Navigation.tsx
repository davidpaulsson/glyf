import classNames from 'classnames';
import React, { useContext } from 'react';
import { Tooltip } from 'react-tippy';
import { actions, routes, store } from '../../store';
import IconArticle from '../IconArticle';
import IconLoading from '../IconLoading';
import IconMoon from '../IconMoon';
import IconOptions from '../IconOptions';
import IconSun from '../IconSun';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const { state, dispatch } = useContext(store);

  const goToNews = () =>
    dispatch({ type: actions.NAVIGATE, payload: routes.NEWS });

  return (
    <nav className={styles.nav}>
      <button onClick={goToNews}>
        <h1>
          Glyf{' '}
          {state.sources.loading && (
            <span>
              <IconLoading />{' '}
              {state.sources.sources.length > 0 ? 'Updating' : 'Loading'}…
            </span>
          )}
        </h1>
      </button>
      <div className={styles.buttons}>
        <Tooltip
          size="small"
          title="News"
          position="bottom"
          trigger="mouseenter"
        >
          <button
            className={classNames({
              [styles.active]: state.navigation.currentRoute === routes.NEWS,
            })}
            onClick={goToNews}
          >
            <IconArticle />
          </button>
        </Tooltip>
        <Tooltip
          size="small"
          title="Settings"
          position="bottom"
          trigger="mouseenter"
        >
          <button
            className={classNames({
              [styles.active]:
                state.navigation.currentRoute === routes.SETTINGS,
            })}
            onClick={() =>
              dispatch({ type: actions.NAVIGATE, payload: routes.SETTINGS })
            }
          >
            <IconOptions />
          </button>
        </Tooltip>

        {state.settings.isDarkMode ? (
          <Tooltip
            size="small"
            title="Disable Dark Mode"
            position="bottom"
            trigger="mouseenter"
          >
            <button
              onClick={() => {
                dispatch({ type: actions.SET_IS_DARK_MODE, payload: false });
                dispatch({
                  type: actions.SET_SYSTEM_DARK_MODE,
                  payload: false,
                });
              }}
            >
              <IconSun />
            </button>
          </Tooltip>
        ) : (
          <Tooltip
            size="small"
            title="Enable Dark Mode"
            position="bottom"
            trigger="mouseenter"
          >
            <button
              onClick={() => {
                dispatch({ type: actions.SET_IS_DARK_MODE, payload: true });
                dispatch({
                  type: actions.SET_SYSTEM_DARK_MODE,
                  payload: false,
                });
              }}
            >
              <IconMoon />
            </button>
          </Tooltip>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
