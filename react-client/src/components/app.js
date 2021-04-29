import React, { Component } from 'react';
import {
  BrowserRouter as Router, Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import LandingPage from './pages/landingPage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import AboutSection from './pageSections/about.js';
import PlaygroundPage from './pages/playground.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <div>
              <NavBar />
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="playground" exact path="/playground" component={PlaygroundPage}/>
              <text>hello</text>
              <Footer />
            </div>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;
