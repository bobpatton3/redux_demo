'use client';

import React from 'react';
import { Provider } from 'react-redux';
import DisplayState from './components/DisplayState';
import store from './store/store';

const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>City Management App</h1>
        <DisplayState />
      </div>
    </Provider>
  );
};

export default Home;