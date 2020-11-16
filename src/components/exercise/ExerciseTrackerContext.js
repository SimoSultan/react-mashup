import React, { useReducer, createContext, useContext } from 'react'
import stateReducer from '../../config/stateReducer'


const ExerciseContext = createContext()


export function useExerciseContext() {
  return useContext(ExerciseContext)
}



function ExerciseTrackerContext( { children } ) {

    // initial state for state reducer
    const initialState = {
        exercises: [],
        loggedInUser: null
    }

    const [state, dispatch] = useReducer(stateReducer, initialState)

    return (
        <ExerciseContext.Provider value={{state, dispatch}}>
            { children }
        </ExerciseContext.Provider>
    )
}

export default ExerciseTrackerContext
