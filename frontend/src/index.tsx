import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from '@material-ui/core/styles';
import { Store } from 'redux';

import configureStore, { history } from './state';
import theme from './theme';
import Routes from './Routes';
import Layout from './Layout';
import { AnyAction } from 'redux';

const store = configureStore();
const persistor = persistStore(store as unknown as Store<any,AnyAction>);
const client = new ApolloClient({ uri: '/api/v1' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Routes />
            </Layout>
          </ThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app_root')
);
