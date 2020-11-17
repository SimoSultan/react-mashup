export const ACTIONS = {
    LOGIN: 'login-user',
    LOGOUT: 'logout-user',
    ADD_EXERCISE: 'add-exercise',
    REMOVE_EXERCISE: 'remove-exercise',
    UPDATE_ONE_EXERCISE: 'update-one-exercise',
    VIEW_ONE_EXERCISE: 'view-one-exercise',
    VIEW_ALL_EXERCISES: 'view-all-exercises',
}

export default function (state, action) {
    switch(action.type) {
        case ACTIONS.LOGIN: {
            return {
                ...state,
                loggedInUser: action.payload
            }
        }
        case ACTIONS.LOGOUT: {
            return {
                ...state,
                loggedInUser: action.payload
            }
        }
        case ACTIONS.ADD_EXERCISE: {
            return {
                ...state,
                exercises: [...state.exercises, action.payload]
            }
        }
        case ACTIONS.REMOVE_EXERCISE: {
            return {
                ...state,
                exercises: state.exercises.filter(ex=> ex.id !== action.payload.id)
            }
        }
        case ACTIONS.UPDATE_EXERCISE: {
            const untouched = state.exercises.filter(ex=> ex.id === action.payload.id)
            return {
                ...state,
                exercises: [...untouched, action.payload]
            }
        }
        case ACTIONS.VIEW_ALL_EXERCISES: {
            return state.exercises
        }
        default: 
            return state
    }
}