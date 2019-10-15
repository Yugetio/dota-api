import React, {Component} from 'react';
import './heroes.css';

import getAllHeroes from "../../services/api-service";

import Filter from '../helpers';

export default class Heroes extends Component {
		state = {
			heroes: null
	};
		
	componentDidMount() {
			this.updateHeroes()
	}

	onHeroesLoaded = (heroes) => {
			this.setState({
					heroes
			});
	};

	updateHeroes = () => {
			getAllHeroes()
				.then(this.onHeroesLoaded);
	};

	createListHeroes(heroes) {

			return heroes.map(hero => (
					<img src={`https://api.opendota.com${ hero.img }`}
							 alt={ hero.localized_name }
							 title={ hero.localized_name }
							 key={ hero.id}
							 onClick={ (e) => this.props.onSelectedHero(e, hero.localized_name.replace(/ /g, '_')) } />
			))

	}


	render() {
			const { heroes } = this.state;

			let heroesAgi,
					heroesStr,
					heroesInt = null;

			if (heroes) {
					heroesAgi = this.createListHeroes(
							Filter.filterHeroesByAgi(heroes)
					);

					heroesStr = this.createListHeroes(
							Filter.filterHeroesByStr(heroes)
					);

					heroesInt = this.createListHeroes(
							Filter.filterHeroesByInt(heroes)
					);
			}


			return (
					<div className="heroes">
							<h3>Agility</h3>
							{ heroesAgi }

							<h3>Str</h3>
							{ heroesStr }

							<h3>Int</h3>
							{ heroesInt }
					</div>
			);
	}
}

