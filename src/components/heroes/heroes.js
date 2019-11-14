import React from 'react';
import { Link } from 'react-router-dom';

import './heroes.css';

import { filterHeroes } from '../helpers';
import { baseUrl } from '../../services/api-service'

const createListHeroes = (heroes, props) =>  {
  const {findHero, clearStateForFindHero} = props;

  return heroes.map(hero => {
    const nameHero = hero.localized_name;

    return (
      <Link to={ nameHero.toLowerCase().replace(/ /g, '_') } key={hero.id}>
        <img src={`${ baseUrl }${ hero.img }`}
             alt={ nameHero }
             title={ nameHero }
             className={ findHero && nameHero
                .toLowerCase()
                .includes(findHero.toLowerCase()) ? 'foundImg' : ''
             }
             onClick={  clearStateForFindHero } />
      </Link>
    )

  });
};


const Heroes = (props) => {
    const { heroes } = props;

    let heroesAgi,
        heroesStr,
        heroesInt = null;

    if (heroes) {
      heroesAgi = createListHeroes(
        filterHeroes(heroes, 'agi'),
        props
      );

      heroesStr = createListHeroes(
        filterHeroes(heroes, 'str'),
        props
      );

    	heroesInt = createListHeroes(
        filterHeroes(heroes, 'int'),
        props
    	);
    }


    return (
      <div className="heroes">
        <div className="agi">
          <h3>Agility</h3>
          { heroesAgi }
        </div>

        <div className="str">
          <h3>Strength</h3>
          { heroesStr }
        </div>

        <div className="int">
          <h3>Intelligence</h3>
          { heroesInt }
        </div>
      </div>
    );
	};

export default Heroes;

