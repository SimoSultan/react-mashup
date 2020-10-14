
import React from 'react'
import { capitalize } from './Helpers'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

export default function PokemonShow( { summaryPokemon, setSummaryPokemon } ) {
  const classes = useStyles();
  console.log(summaryPokemon);

  let sprite = `https://pokeres.bastionbot.org/images/pokemon/${summaryPokemon.id}.png` 

  return (

    <Container>

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
                { summaryPokemon === undefined ? "Name" : capitalize(summaryPokemon.name)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Type1: {capitalize(summaryPokemon.type1)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Type2: {capitalize(summaryPokemon.type2)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box
        display="flex" 
        justifyContent="center"
        mt="2%"
      >
        <Button variant="contained" onClick={() => setSummaryPokemon(null)}>BACK</Button>
      </Box>


    </Container>





  )
}
 