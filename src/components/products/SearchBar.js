import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

function SearchBar( {filterText, inStockOnly, onFilterTextChange, onInStockChange } ) {

  return (

    <Container>
      <TextField 
        label="Search..."
        variant="outlined"
        onChange={e => onFilterTextChange(e.target.value)}
        value={filterText}
        type="search"
      />

      <Box align="center" my="5%">
        <FormControlLabel 
            value="inStockOnly"
            label="Only show products in stock"
            labelPlacement="end"
            control={
              <Checkbox type="checkbox" checked={inStockOnly} 
                onChange={e => onInStockChange(e.target.checked)}
                color="primary"
              /> 
            }
        />
      </Box>
    </Container>
  );
}

export default SearchBar;


