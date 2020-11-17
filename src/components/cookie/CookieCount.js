// import React from 'react'
import React, { useEffect, useRef } from 'react'
import { useCookieContext } from './CookieClickerContext'
import { ACTIONS } from './stateReducerCookie'

import 
{ 
    Box,
    Button,
    Typography, 
} from '@material-ui/core';


function CookieCount() {
    
    const { state, dispatch } = useCookieContext()
    const timer = useRef(null)


    useEffect(() => { 
        if (timer.current) stopCounter()
        startCounter() 
    }, [state.cookiesPerSecond])
  
    const startCounter = () => {
        timer.current = setInterval(() => {
            dispatch({
                type: ACTIONS.INCREMENT_COUNT,
                payload: {value: state.cookiesPerSecond}
            })
        }, 1000)
    }
  
    const stopCounter = () => {
        clearInterval(timer.current)
        timer.current = null
    }



    
    function handleClick(direction) {
        dispatch({
            type: direction === "increment" ? ACTIONS.INCREMENT_COUNT : ACTIONS.DECREMENT_COUNT,
            payload: {value: state.cookiesPerClick}
        })
    }

    

    return (
        <>
            <Box my={4}>
                <Typography variant="h4">Current Cookie Count</Typography>
                <Typography variant="h5" style={{marginTop: '3%', color: 'red'}}>{state.count}</Typography>
            </Box>
            <Box my={4}>
                <Typography variant="h4">Manually Increase Cookie Count</Typography>
                <Button variant="outlined" color="primary" onClick={() => handleClick('increment')}>Increase cookies by {state.cookiesPerClick}</Button>
                <Button variant="outlined" color="primary" onClick={() => handleClick('decrement')}>Decrease cookies by {state.cookiesPerClick}</Button>
            </Box>
        </>
    )
}

export default CookieCount
