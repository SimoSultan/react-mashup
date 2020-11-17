import React from 'react'

import 
{ 
    Box,
    Button,
    Typography, 
} from '@material-ui/core';


function CookiePerClick() {
    return (
        <>
            <Box my={4}>
                <Typography variant="h4">
                    Increase Cookies Per Click
                </Typography>
                <Button variant="outlined" color="primary">Spend 5 cookies to increase cookies per click by 1</Button>
            </Box>
        </>
    )
}

export default CookiePerClick
