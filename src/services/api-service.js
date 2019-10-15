		const _baseUrl = 'https://api.opendota.com';

		const getAllHeroes = async () => {
				const result = await fetch(`${_baseUrl}/api/heroStats`);

				if (!result.ok) {
				  throw new Error(`Error status: ${result.status}`);
				}

				return await result.json();
		};

 export default getAllHeroes;