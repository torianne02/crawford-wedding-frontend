import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuestListContainer from './containers/GuestListContainer';
import RsvpContainer from './containers/RsvpContainer';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import Details from './components/Details';
import OurStory from './components/OurStory';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/attending" component={GuestListContainer} />
          <Route path="/rsvp" component={RsvpContainer} />
          <Route path="/details" component={Details} />
          <Route path="/our-story" component={OurStory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Route exact path="/" component={Home} />
