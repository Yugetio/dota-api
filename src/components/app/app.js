import React, { Component } from 'react';

import Header from '../header';
import Heroes from '../heroes';

export default class App extends Component {

		onSelectedHero = (e, name) => {
				e.target.className = 'foundImg';
				console.log(e, name);
		};

		render() {
				return (
						<div className="app">
								<Header/>
								<Heroes onSelectedHero={ this.onSelectedHero } />
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
