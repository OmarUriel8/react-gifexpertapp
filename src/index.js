import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GifExpertApp from './components/GifExpertApp';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<GifExpertApp />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
