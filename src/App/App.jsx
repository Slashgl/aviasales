import React from 'react';
import { Provider } from 'react-redux';
import classes from './App.module.scss';
import Tabs from '../Tabs/Tabs';
import Tickets from '../Tickets/Tickets';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import FilterList from '../FilterList/FilterList';

import {store} from "../toolkitSlice";

function App() {
  return (
    <Provider store={store}>
      <div className={classes.App}>
        <FilterList />
        <div className={classes.Header}>
          <Tabs />
          <Tickets />
          <ShowMoreButton />
        </div>

      </div>
    </Provider>
  );
}

export default App;
