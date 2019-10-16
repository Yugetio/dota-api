import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import Heroes from '../heroes';
import HeroDetails from '../hero-details'
import getAllHeroes from "../../services/api-service";

export default class App extends Component {

  state = {
    heroes: [],
    selectedHero: null,
    isLoaded: false
  };

  componentDidMount() {
    getAllHeroes()
    .then(heroes => this.setState({
      heroes,
      isLoaded: true
    }));
  }
  onSelectedHero = (e, name) => {
    // e.target.className = 'foundImg';
    console.log(e, name);
  };

  render() {
    const { heroes, isLoaded } = this.state;
    return (
      <div className="app">
        <Router>
          <Header/>
          <Route path="/"
                 exact >
            <Heroes onSelectedHero={ this.onSelectedHero }
                    heroes={ heroes } />
          </Route>

          <Route path="/:heroName" render={ ({ match }) => {

            if (isLoaded) {
              const { heroName } = match.params;
              const hero = heroes.find(hero =>
                  hero.localized_name.toLowerCase().replace(' ', '_') ===
                  heroName.toLowerCase());


              return <HeroDetails hero={ hero }/>;
            }
          }}/>
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
