import { legacy_createStore as createStore } from "redux";
import { VisibilityReducer } from "./visibilityReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducer } from "./todoReducer";
import { combineReducers } from "redux";

import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const rootReducer = combineReducers({
	todos: TodoReducer,
	visibility: VisibilityReducer
});

const persistConfig = {
	key: 'root',
	storage
};

const myPersistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(myPersistReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;


