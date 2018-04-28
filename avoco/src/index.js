import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initializeApi from './api/initialize';
import rootReducer from './store/reducers/rootReducer';
import { createStore } from 'redux';

initializeApi();
var store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
	<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
