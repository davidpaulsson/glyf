import React, { useContext, useEffect } from 'react';
import News from '../pages/News';
import Settings from '../pages/Settings';
import { routes, store, actions } from '../store';
import Layout from './Layout';
import Navigation from './Navigation';
import useMedia from '../hooks/useMedia';

const usePrefersdarkMode = () =>
  useMedia(['(prefers-color-scheme: dark)'], [true], false);

function App() {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    dispatch({ type: actions.SET_LOADING_SOURCES });

    const fetchArticles = async () => {
      const response = await fetch('https://davidpaulsson.se/glyf/data.json');
      if (response.status >= 200 && response.status <= 299) {
        const jsonResponse = await response.json();
        dispatch({
          type: actions.SET_SOURCES,
          payload: jsonResponse,
        });
      } else {
        // Handle errors
        console.log(response.status, response.statusText);
      }
    };

    fetchArticles();
  }, [dispatch]);

  const prefersDarkMode = usePrefersdarkMode();
  useEffect(() => {
    if (state.settings.useSystemPreferenceDarkMode) {
      dispatch({ type: actions.SET_IS_DARK_MODE, payload: prefersDarkMode });
    }
  }, [prefersDarkMode, dispatch, state.settings.useSystemPreferenceDarkMode]);

  return (
    <Layout>
      <Navigation />
      {state.navigation.currentRoute === routes.NEWS && <News />}
      {state.navigation.currentRoute === routes.SETTINGS && <Settings />}
    </Layout>
  );
}

export default App;
