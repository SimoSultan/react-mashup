import React, { createContext, useContext, useReducer } from 'react'
import stateReducerCookie from './CookieClickerContext'

const CookieContext = createContext()

export function useCookieContext() {
    return useContext(CookieContext)
}

function CookieClickerContext( { children } ) {

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

export default CookieClickerContext
