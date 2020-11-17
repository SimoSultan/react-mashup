import React from 'react'
import { useCookieContext } from './CookieClickerContext'
import { ACTIONS } from './stateReducerCookie'

import 
{ 
    Box,
    Button,
    Typography, 
} from '@material-ui/core';

function CookiePerSecond() {

    const { state, dispatch } = useCookieContext()
    const cookieSpend = 100

    function handleClick() {

        if (state.count - cookieSpend < 0) return(alert("Sorry you don't have enough cookies to spend"))

        dispatch({
            type: ACTIONS.INCREMENT_SECOND,
        })
    }

    return (
        <>
            <Box my={4}>
                <Typography variant="h4">Automatically Increase Cookie Count</Typography>
                <Typography variant="body1">Increases by {state.cookiesPerSecond} every second</Typography>
            </Box>
            <Box my={4}>
                <Typography variant="h4">Increase Cookies Per Second</Typography>
                <Button variant="outlined" color="primary" onClick={handleClick}>Spend {cookieSpend} cookies to increase cookies per second by 1</Button>
            </Box>
        </>
    )
}

export default CookiePerSecond
