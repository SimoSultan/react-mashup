import React from 'react'
import { useCookieContext } from './CookieClickerContext'
import { ACTIONS } from './stateReducerCookie'

import 
{ 
    Box,
    Button,
    Typography, 
} from '@material-ui/core';


function CookiePerClick() {

    const { state, dispatch } = useCookieContext()
    const cookieSpend = 5 

    function handleClick() {
        
        if (state.count - cookieSpend < 0) return(alert("Sorry you don't have enough cookies to spend"))

        dispatch({
            type: ACTIONS.INCREMENT_CLICK,
        })
    }

    return (
        <>
            <Box my={4}>
                <Typography variant="h4">
                    Increase Cookies Per Click
                </Typography>
                <Button variant="outlined" color="primary" onClick={handleClick}>Spend {cookieSpend} cookies to increase cookies per click by 1</Button>
            </Box>
        </>
    )
}

export default CookiePerClick
