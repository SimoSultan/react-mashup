import React from 'react'
import TwootComment from './TwootComment'
import { Grid } from '@material-ui/core';


function TwootComments( {comments } ) {
    
    return (
        <Grid item container direction="column" justify="center" alignItems="flex-start">
            {
                comments.map((comment, index) => <TwootComment key={`comment-${++index}`} comment={comment} />)
            }
        </Grid>
    )
}

export default TwootComments
