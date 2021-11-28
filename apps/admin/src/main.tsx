import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarNavigation } from './app/components/sidebar/navigation';

import AppRouter from './app/router/router';
import './style.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import Login from './app/pages/login/login';
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

const filterPath = window.location.pathname !== '/login' && window.location.pathname !== '/order'
&& window.location.pathname !== '/feedback'
ReactDOM.render(
  <StrictMode>
    <Router>
      {filterPath && (<SidebarNavigation />)}
      <ApolloProvider client={createApolloClient()}>
        <div className={`${filterPath && "ml-72 mr-8 h-screen "}`} >
          <AppRouter />
        </div>
      </ApolloProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
