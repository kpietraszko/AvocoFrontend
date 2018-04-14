import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
//TODO: dodać wygasanie

const authPersistConfig = {
	key: 'authentication',
	storage,
}

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export default () => {
	let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	let persistor = persistStore(store);
	return { store, persistor }
}
