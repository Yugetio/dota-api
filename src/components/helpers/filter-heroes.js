const _filterHeroes = (heroes, attr) => {
		return heroes.filter(({ primary_attr })  => primary_attr === attr);
};

const filterHeroesByInt = (heroes) => _filterHeroes(heroes, 'int');

const filterHeroesByStr = (heroes) => _filterHeroes(heroes, 'str');

const filterHeroesByAgi = (heroes) => _filterHeroes(heroes, 'agi');

export {
		filterHeroesByInt,
		filterHeroesByStr,
		filterHeroesByAgi
};

