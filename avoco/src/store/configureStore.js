import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
import initializeApi from '../api/initialize';
//TODO: dodać wygasanie

/* const authPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['authentication'],
	migrate: (state) => {
		initializeApi();
		return Promise.resolve(state);
	}
} */

//const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export default () => {
	let store = createStore(rootReducer/*persistedReducer*/, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	//let persistor = persistStore(store);
	return store;//{ store, persistor }
}
//persist obecnie nieużywany bo psuje
