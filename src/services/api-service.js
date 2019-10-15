export default class DotaApiService {
		_baseUrl = 'https://api.opendota.com';

		getHeroes = async () => {
				const result = await fetch(`${this._baseUrl}/api/heroStats`);

				if (!result.ok) {
				  throw new Error(`Error status: ${result.status}`);
				}

				return await result.json();
		};

		getHeroesAgi = () => {
				return this._filterHeroes('agi');
		};

		getHeroesStr = () => {
				return this._filterHeroes('str');
		};

		getHeroesInt = () => {
				return this._filterHeroes('int');
		};

		getHeroImage = (url) => {
			return `${this._baseUrl}${url}`;
		};

		_filterHeroes = async (attr) => {
				const heroes = await this.getHeroes();
				return heroes.filter(({ primary_attr })  => primary_attr === attr);
		};
}