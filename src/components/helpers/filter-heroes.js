const filterHeroes = (heroes, attr) => {
	return heroes.filter(({ primary_attr })  => primary_attr === attr);
};

export default filterHeroes;

