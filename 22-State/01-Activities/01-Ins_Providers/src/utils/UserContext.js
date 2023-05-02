//import react and useState
import React, { useState } from 'react';

//we will export userContext -- which we are creating with React.createContext()
export const UserContext = React.createContext();

//we are setting up our UserProvider
//we initialize our provider to have a name, a role, and an id
const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'John',
    role: 'Admin',
    id: 142323,
  });
//we will return a component to UserContext.Provider -- it will provide whatever we pass in as props
    //which we create with useState
  return (
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
  );
};

export default UserProvider;
