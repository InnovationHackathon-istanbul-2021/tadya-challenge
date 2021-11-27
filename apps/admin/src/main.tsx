import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarNavigation } from './app/components/sidebar/navigation';

import AppRouter from './app/router/router';
import './style.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://tadya-backend.herokuapp.com/v1/graphql',
      headers: {
        'x-hasura-admin-secret': `WOmL8:-gDiYD=4VY.V0*Dl7Dj(Y&ZQ`,
      },
    }),
    cache: new InMemoryCache(),
  });
};
console.log(process.env.REACT_AUTH_TOKEN,"---")
ReactDOM.render(
  <StrictMode>
    <Router>
      <SidebarNavigation />
      <ApolloProvider client={createApolloClient()}>
        <div className="ml-72 mr-8 h-screen ">
          <AppRouter />
        </div>
      </ApolloProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
