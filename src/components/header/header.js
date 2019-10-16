import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<h1>Dota API</h1>
			</Link>
		</div>
	);
};

export default Header;