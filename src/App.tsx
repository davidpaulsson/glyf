import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import Header from './components/Header';
import SourcesGrid from './components/SourceGrid';
import { Action, Status, CurrentPage } from './types';

const App = () => {
  const [currentPage, setCurrentPage] = useState(CurrentPage.NEWS);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Action.SET_STATUS, status: Status.LOADING });

    const fetchData = async () => {
      const {
        data: { sources },
      } = await axios.get('https://davidpaulsson.se/glyf/data.json');

      dispatch({ type: Action.ADD_SOURCES, sources });
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === CurrentPage.NEWS && <SourcesGrid />}
      {currentPage === CurrentPage.SETTINGS && <p>Settings</p>}
    </div>
  );
};

export default App;
