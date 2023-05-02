import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//need to import react router dom -- and install the package as a dev dependency
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
//we wrap the application with the router, and we specify the routes we want and a route for each
function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component
              path is like the URL --- homepage
              we link the element Home to that home / url */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* Define a route that will take in variable data 
              we define the path/url for profiles
              and we link that url to the Profile element
                      since we added :profileId as a parameter here, we can use the parameter in the Profile component*/}
              <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
