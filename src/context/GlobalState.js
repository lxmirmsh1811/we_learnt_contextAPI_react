import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial State

const initialState = {
    user: {},
}

// Create context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    function addUser(user) {
        dispatch({
            type: 'ADD_USER',
            payload: user
        });
    }



    return (
        <GlobalContext.Provider
            value={
                {
                    user: state.user,
                    addUser
                }
            }
        >
            {children}
        </GlobalContext.Provider>);
}
