import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuestListContainer from './containers/GuestListContainer';
import RsvpContainer from './containers/RsvpContainer';
import NavBar from './components/NavBar';
import RsvpForm from './components/rsvps/RsvpForm';
// import Home from './components/Home';
// import Details from './components/Details';
// import OurStory from './components/OurStory';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/attending" component={GuestListContainer} />
          <Route exact path="/rsvp" component={RsvpForm} />
          <Route exact path="/rsvps" component={RsvpContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Route exact path="/" component={Home} />
// <Route exact path="/details" component={Details} />
// <Route exact path="/our-story" component={OurStory} />
