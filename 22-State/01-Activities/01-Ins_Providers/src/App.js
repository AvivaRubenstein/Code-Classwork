import React from 'react';
//import userProvider
//we will wrap our app in this provider
//similar to how we wrapped everything in ApolloProvider, except we are creating this provider
import UserProvider from './utils/UserContext';
import UserComponent from './components/UserComponent';
import './jass.css';
import './app.css';

export default function App() {
  return (
    <div>
      <UserProvider>
        <UserComponent />
      </UserProvider>
    </div>
  );
}
