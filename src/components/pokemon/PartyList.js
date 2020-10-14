
import React from 'react'
import { capitalize } from './Helpers'

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 300,
    width: 300,
  },
});


export default function PartyList( { party } ) {
  const classes = useStyles();

  const partyList = party.map(pok => (
    <Box
    display="flex" 
    justifyContent="center"
    mt="3%"
    >

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={sprite}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { pok === undefined ? "Name" : capitalize(pok.name)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Type1: {capitalize(pok.type1)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Type2: {capitalize(pok.type2)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  ))

  return (

    <Container>

      <Typography gutterBottom variant="h2">
        My Party
      </Typography>

      {partyList}

      <Button variant="contained">BACK</Button>

    </Container>

  )
}
 