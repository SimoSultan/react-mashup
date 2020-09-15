import React from 'react'
import { Box, Button } from '@material-ui/core';


export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (

      <Box 
        display="flex" 
        justifyContent="center"
      >
      {goToPrevPage && <Box mx="1%"><Button variant="contained" onClick={goToPrevPage}>Previous</Button></Box>}
      {goToNextPage && <Box mx="1%"><Button m="1%" variant="contained" color="primary" onClick={goToNextPage}>Next</Button></Box>}
    </Box>
  )
}
