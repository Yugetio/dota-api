import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import Header from '../header';
import SearchPanel from '../search-panel';
import Heroes from '../heroes';
import HeroDetails from '../hero-details'

import ErrorBoundry from '../error-boundry';
import { getAllHeroes } from "../../services/api-service";

export default class App extends Component {

  state = {
    heroes: [],
    isLoaded: false,
    hasError: false,
    findHero: ''
  };

  componentDidMount() {
    getAllHeroes()
      .then(heroes => this.setState({
        heroes,
        isLoaded: true
      })).catch(() => this.setState({
        hasError: true
      }))
  }

  onSearchHero = (e) => {
    this.setState({
      findHero: e.target.value
    })
  };

  clearStateForFindHero = () => {
    this.setState({
      findHero:''
    })
  };

  render() {
    const { heroes, isLoaded, findHero } = this.state;
    const heroesPage = !isLoaded ?
                        'Loading...' :
                        <Heroes  findHero={ findHero }
                                 heroes={ heroes }
                                 clearStateForFindHero={ this.clearStateForFindHero }/>;

    return (
      <ErrorBoundry hasError={ this.state.hasError}>
        <Router>
          <div className="app">
            <Header/>
            <Route path="/" exact >
              <SearchPanel onSearchHero={ this.onSearchHero } />
              { heroesPage }
            </Route>
            <Route path="/:heroName" render={ ({ match }) => {

              if ( isLoaded ) {
                const { heroName } = match.params;
                const hero = heroes.find(hero =>
                    hero.localized_name.toLowerCase().replace(/ /g, '_') ===
                    heroName.toLowerCase()
                );

                return hero ? <HeroDetails hero={ hero }/> : <h1> Hero not found </h1>;
              }
            }}/>
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}