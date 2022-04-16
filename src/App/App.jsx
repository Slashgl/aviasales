import React from 'react';
import classes from './App.module.scss';
import Tabs from '../Tabs/Tabs';
import Filter from '../Filter/Filter';
import Tickets from '../Tickets/Tickets';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function App() {
  return (
    <div className={classes.App}>
      <Filter />
      <div className={classes.Header}>
        <Tabs />
        <Tickets />
        <ShowMoreButton />
      </div>

    </div>
  );
}

export default App;
