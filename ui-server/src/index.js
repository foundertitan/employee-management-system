import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjusted path to App component
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import EmployeeDirectory from './components/EmployeeDirectory';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <EmployeeDirectory />
  </ApolloProvider>,
  document.getElementById('root')
);
