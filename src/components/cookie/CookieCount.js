import React from 'react'
// import React, { useEffect } from 'react'
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

    function handleClick(direction) {
        dispatch({
            type: direction === "increment" ? ACTIONS.INCREMENT_COUNT : ACTIONS.DECREMENT_COUNT,
            payload: {value: state.cookiesPerClick}
        })
    }
    
    // function handleClickIncrement() {
    //     dispatch({
    //         type: ACTIONS.INCREMENT_COUNT,
    //         payload: {value: state.cookiesPerClick}
    //     })
    // }

    // function handleClickDecrement() {
    //     dispatch({
    //         type: ACTIONS.DECREMENT_COUNT,
    //         payload: {value: state.cookiesPerClick}
    //     })
    // }

    // useEffect(() => {
    //     const myTimer = setInterval(() => {
    //         dispatch({
    //             type: ACTIONS.INCREMENT_COUNT,
    //             payload: {value: state.cookiesPerClick}
    //         })
    //     }, state.cookiesPerSecond * 1000);
    // }, [])
    

    return (
        <>
            <Box my={4}>
                <Typography variant="h4">Current Cookie Count</Typography>
                <Typography variant="h6" style={{marginTop: '3%'}}>{state.count}</Typography>
            </Box>
            <Box my={4}>
                <Typography variant="h4">Manually Increase Cookie Count</Typography>
                <Button variant="outlined" color="primary" onClick={() => handleClick('increment')}>Increase cookies by {state.cookiesPerClick}</Button>
                {/* <Button variant="outlined" color="primary" onClick={handleClickIncrement}>Increase cookies by {state.cookiesPerClick}</Button> */}
                <Button variant="outlined" color="primary" onClick={() => handleClick('decrement')}>Decrease cookies by {state.cookiesPerClick}</Button>
                {/* <Button variant="outlined" color="primary" onClick={handleClickDecrement}>Decrease cookies by {state.cookiesPerClick}</Button> */}
            </Box>
        </>
    )
}

export default CookieCount
