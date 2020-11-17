import React, { useReducer, createContext, useContext } from 'react'
import stateReducerCookie from './stateReducerCookie'

const CookieContext = createContext()

export function useCookieContext() {
    return useContext(CookieContext)
}

function CookieClickerProvider( { children } ) {

    // initial state for state reducer
    const initialState = {
        count: 0,
        cookiesPerClick: 1,
        cookiesPerSecond: 1,
    }

    const [state, dispatch] = useReducer(stateReducerCookie, initialState)

    return (
        <CookieContext.Provider value={{state, dispatch}}>
            { children }
        </CookieContext.Provider>
    )
}

export default CookieClickerProvider
