import React from 'react'
import CookieCount from './CookieCount'
import CookiesPerClick from './CookiesPerClick'
import CookiesPerSecond from './CookiesPerSecond'
import CookieClickerContext from './CookieClickerContext'

import 
{ 
    Container,
    Grid,
    Typography, 
} from '@material-ui/core';


function CookieClicker() {
    
    return (

        <CookieClickerContext>

            <Container style={{textAlign: 'center'}}>
                <Typography variant="h2" style={{ marginTop: '5%'}}>Auto Cookie Clicker 2.0</Typography>

                <Grid container direction="column" alignItems="center" justify="center">
                    <CookieCount />
                    <CookiesPerClick />
                    <CookiesPerSecond />
                </Grid>
            </Container>

        </CookieClickerContext>
    )
}

export default CookieClicker
