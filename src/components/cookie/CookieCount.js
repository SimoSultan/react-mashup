import React from 'react'

import 
{ 
    Container,
    Button,
    Typography, 
} from '@material-ui/core';


function CookieCount() {
    return (
        <>
            <div>
                <Typography variant="h3">Manually Increase Cookie Count</Typography>
                <Button variant="outlined">Increase by 5</Button>
            </div>
        </>
    )
}

export default CookieCount
