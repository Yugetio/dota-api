import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">Dota API</Link>
		</div>
	);
};

export default Header;