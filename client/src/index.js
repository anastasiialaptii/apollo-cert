import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from 'react';
import { createRoot } from 'react-dom/client';
import Pages from './pages';
import GlobalStyles from './styles';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/'
});

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>

  </React.StrictMode>
);
