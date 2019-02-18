import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuestListContainer from './containers/GuestListContainer';
import RsvpContainer from './containers/RsvpContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Details from './components/Details';
import OurStory from './components/OurStory';
import MusicContainer from './containers/MusicContainer';
import ThankYou from './components/rsvps/ThankYou';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/attending" component={GuestListContainer} />
          <Route exact path="/rsvp" component={RsvpContainer} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/our-story" component={OurStory} />
          <Route exact path="/music" component={MusicContainer} />
          <Route exact path="/" component={Home} />
          <Route exact path='/thank-you' component={ThankYou} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
