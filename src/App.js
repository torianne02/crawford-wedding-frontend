import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuestListContainer from './containers/GuestListContainer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/guests" component={ GuestListContainer } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
