import { RouteComponentProps, Router } from '@reach/router';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import Header from './components/Header';
import SourcesGrid from './components/SourceGrid';
import { Action, Status } from './types';

const News = (props: RouteComponentProps) => <SourcesGrid />;
const Settings = (props: RouteComponentProps) => <p>Settings</p>;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Action.SET_STATUS, status: Status.LOADING });

    const fetchData = async () => {
      const {
        data: { sources },
      } = await axios.get('./data.json');

      dispatch({ type: Action.ADD_SOURCES, sources });
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Router>
        <News path="/" />
        <Settings path="settings" />
      </Router>
    </div>
  );
};

export default App;
