import React, { createContext, useContext } from 'react';
import { useAccountReducer } from './reducers';

const AccountContext = createContext();
const { Provider } = AccountContext;

//we are doing use reducer HERE, to get state and dispatch initialized for whole app
const AccountProvider = ({ value = [], ...props }) => {
  
  const [state, dispatch] = useAccountReducer({ //useAccReducer is just useReducer(reducer, initialState)
    //we are passing these in as initial state
    isLoggedIn: false,
    userName: 'admin',
  });
//this Provider provides all of the state, instead of a bunch of individual states
//dispatch also allows all of app to dispatch actions to update state
  return <Provider value={[state, dispatch]} {...props} />;
};

const useAccountContext = () => useContext(AccountContext);

export { AccountProvider, useAccountContext };
