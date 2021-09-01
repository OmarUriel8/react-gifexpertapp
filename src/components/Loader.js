import React from 'react';
import './Loader.css';
const Loader = () => {
	return (
		<div className="container">
			<div className="lds-circle">
				<div></div>
			</div>
		</div>
	);
};

export default Loader;
