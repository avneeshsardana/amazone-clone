// Set Data layer
//Track row basket
import { red } from '@material-ui/core/colors';
import React, { createContext,useContext, useReducer } from 'react'
    
  //Data Layer 
export const StateContext = createContext();

//Build a provider
export const StateProvider = ( { reducer, initialState, children}) => (

    < StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

) ;

// This is how we use it inside component
export const useStateValue = () => useContext(StateContext);





