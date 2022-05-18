import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    userProfile: [
    ],
    loggedOut: true
}


//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function addUser(user){
        dispatch({
            type: 'Add_User',
            payload: user
        })
    }
    return (
        <GlobalContext.Provider value={{
            userProfile: state.userProfile,
            loggedOut: state.loggedOut,
            addUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}