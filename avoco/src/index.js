import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initializeApi from './api/initialize';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';


initializeApi();
const configuredStore = configureStore();
ReactDOM.render(
	<Provider store={configuredStore.store}>
		<PersistGate loading={null} persistor={configuredStore.persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
