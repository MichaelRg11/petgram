// Dependencias
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserProvider } from './Context'

// App
import { App } from './App'

const client = new ApolloClient({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <UserProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserProvider>,
  document.getElementById('app')
)
