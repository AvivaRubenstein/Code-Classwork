import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

//apollo client helps us interact w Apollo server
//lets us use React to make graphQL queries
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

//we wrap our entire react application inside of ApolloProvider
    //  to allow us make graphQL queries --- we can access Apollo from anywhere in the react application and make requests to /graphql endpoint
//pass in the client connection to apollo-client as the client

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
