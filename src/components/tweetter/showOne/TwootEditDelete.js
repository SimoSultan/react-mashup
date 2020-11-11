import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Grid, makeStyles } from '@material-ui/core';

import TwootEdit from './TwootEdit'

const useStyles = makeStyles((theme) => ({
    twootEditCont: {
        marginTop: '5%',
    },
}))


function TwootEditDelete( { twootId, twootMsg, showCommentCont, setShowCommentCont, handleTwootDelete, handleUpdateTwootMsg } ) {
    const classes = useStyles()
    const [editting, setEditting] = useState(false)


    function handleEditButtonPress() {
        editting ? setEditting(false) : setEditting(true)
    }

    function handleCommentButtonPress() {
        showCommentCont ? setShowCommentCont(false) : setShowCommentCont(true)
    }


    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.twootEditCont}>

            <Grid item container justify="space-around">

                <Button onClick={handleCommentButtonPress}>
                    Make Comment
                </Button>

                <Button onClick={handleEditButtonPress}>
                    Edit Twoot
                </Button>

                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => handleTwootDelete(twootId)}
                >
                    Delete Twoot
                </Button>
            </Grid>

            <Grid item container alignItems="center" style={{marginTop: '3%'}}>
                { editting && 
                    <TwootEdit 
                        twootId={twootId} 
                        twootMsg={twootMsg} 
                        handleUpdateTwootMsg={handleUpdateTwootMsg} 
                    /> 
                }
            </Grid>

        </Grid>
    )
}

export default TwootEditDelete
