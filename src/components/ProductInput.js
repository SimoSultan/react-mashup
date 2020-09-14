import React from 'react';
import { CssBaseline, Button, Container, Typography, Box } from '@material-ui/core';
import { PRODUCTS } from '../data';


function ProductInput() {

  function addProductToData() {
    
  }

  return (

    <Container>
      <Box mt="5%"><Typography variant="h4" align="center">Input Product</Typography></Box>

      <form>
        <label htmlFor="">Name</label>
        <input type="text"/>
        <br/>
        <label htmlFor="">Category</label>
        <input type="text"/>
        <br/>
        <label htmlFor="">Price</label>
        $<input type="text"/>
        <br/>
        <label htmlFor="">Stocked</label>
        <input type="checkbox"/>

      </form>
      <Button variant="contained" color="primary" onClick={addProductToData() }>Submit</Button>
    </Container>

  );
}

export default ProductInput;


