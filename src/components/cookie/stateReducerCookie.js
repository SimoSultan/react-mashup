export const ACTIONS = {
    INCREMENT_COUNT: 'increment-count',
    DECREMENT_COUNT: 'decrement-count',
    INCREMENT_CLICK: 'increment-click',
    INCREMENT_SECOND: 'increment-second',
}

export default function (state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT_COUNT: {
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
        case ACTIONS.INCREMENT_CLICK: {
            console.log('increment click');
            return {
                ...state,
                count: state.count - 5,
                cookiesPerClick: state.cookiesPerClick + 1
            }
        }
        case ACTIONS.INCREMENT_SECOND: {
            console.log('increment second');
            return {
                ...state,
                count: state.count - 100,
                cookiesPerSecond: state.cookiesPerSecond + 1
            }
        }

        default: 
            return state
    }
}