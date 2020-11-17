export const ACTIONS = {
    INCREMENT_COUNT: 'increment',
    DECREMENT_COUNT: 'decrement',
}

export default function (state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT_COUNT: {
            console.log('incrementing count');
            return {
                ...state,
                count: state.count + action.payload.value
            }
        }
        case ACTIONS.DECREMENT_COUNT: {
            console.log('decerementing count');
            return {
                ...state,
                count: state.count - action.payload.value
            }
        }
        default: 
            return state
    }
}