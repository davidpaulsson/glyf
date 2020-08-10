import React, { useContext } from 'react';
import News from '../pages/News';
import Settings from '../pages/Settings';
import { routes, store } from '../store';
import Layout from './Layout';
import Navigation from './Navigation';

function App() {
  const { state } = useContext(store);

  return (
    <Layout>
      <Navigation />
      {state.navigation.currentRoute === routes.NEWS && <News />}
      {state.navigation.currentRoute === routes.SETTINGS && <Settings />}
    </Layout>
  );
}

export default App;
