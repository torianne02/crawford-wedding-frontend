import React from 'react';
// import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GuestListContainer from './containers/GuestListContainer';
import RsvpContainer from './containers/RsvpContainer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <GuestListContainer />
        <RsvpContainer />
      </div>
    </Router>
  );
}

export default App;
