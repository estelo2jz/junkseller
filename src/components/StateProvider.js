// setuo data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer} from 'react';

// this is the data layer
export const StateContext = createContext();

// build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// this is how we use inside of a component
export const useStateValue = () => useContext(StateContext);