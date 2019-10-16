import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './heroes.css';

import { filterHeroes } from '../helpers';
import { baseUrl } from '../../services/api-service'

export default class Heroes extends Component {

  createListHeroes(heroes) {

    return heroes.map(hero => (
      <Link to={hero.localized_name.toLowerCase().replace(/ /g, '_')}>
      <img src={`${ baseUrl }${ hero.img }`}
        alt={ hero.localized_name }
        title={ hero.localized_name }
        key={ hero.id }
        onClick={ (e) =>
          this.props.onSelectedHero(e, hero.localized_name.replace(/ /g, '_')) } />
      </Link>
    ))

  }


  render() {
    const { heroes } = this.props;

    let heroesAgi,
        heroesStr,
        heroesInt = null;

    if (heroes) {
      heroesAgi = this.createListHeroes(
        filterHeroes(heroes, 'agi')
      );

      heroesStr = this.createListHeroes(
        filterHeroes(heroes, 'str')
      );

    	heroesInt = this.createListHeroes(
        filterHeroes(heroes, 'int')
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

