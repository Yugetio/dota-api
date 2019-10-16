import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import Heroes from '../heroes';

export default class App extends Component {

  onSelectedHero = (e, name) => {
    // e.target.className = 'foundImg';
    console.log(e, name);
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Header/>
          <Route path="/" >
            <Heroes onSelectedHero={ this.onSelectedHero } />
          </Route>
        </Router>
      </div>
    );
  }
}

/*

app
	router
			header
			context
			|-	search
			|-	|- route->heroes
					|- hero
*/
