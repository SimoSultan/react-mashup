import React from 'react'
import { useCookieContext } from './CookieClickerContext'

import 
{ 
    Box,
    Button,
    Typography, 
} from '@material-ui/core';

function CookiePerSecond() {

    const { state } = useCookieContext()

    return (
        <>
            <Box my={4}>
                <Typography variant="h4">Automatically Increase Cookie Count</Typography>
                <Typography variant="body1">Increases by {state.cookiesPerSecond} every second</Typography>
            </Box>
            <Box my={4}>
                <Typography variant="h4">Increase Cookies Per Second</Typography>
                <Button variant="outlined" color="primary">Spend 100 cookies to increase cookies per second by 1</Button>
            </Box>
        </>
    )
}

export default CookiePerSecond
