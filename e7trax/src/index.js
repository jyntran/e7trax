import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Store from './store';
import './index.css';

const PlayerInstance = process.env.NODE_ENV === 'development' ? Store(applyMiddleware(logger)) : Store();

ReactDOM.render(
	<Provider store={PlayerInstance}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
