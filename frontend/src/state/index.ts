import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
export const history = createBrowserHistory();
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
      )
    )
  );

  return store;
};

export default configureStore;
