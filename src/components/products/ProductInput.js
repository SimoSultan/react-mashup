import React from 'react';
import { CssBaseline, Button, Container, Typography, Box } from '@material-ui/core';
import { PRODUCTS } from './data';


function ProductInput() {

  function addProductToData() {
    let name = document.getElementById('product-name')
    let category = document.getElementById('product-cat')
    let price = document.getElementById('product-price')
    let stocked = document.getElementById('product-stocked')

    PRODUCTS.push({ name, category, price, stocked })
  }

  return (

    <Container>
      <Box mt="5%"><Typography variant="h4" align="center">Input Product</Typography></Box>

      <form>
        <label htmlFor="">Name</label>
        <input type="text" id="product-name" />
        <br/>
        <label htmlFor="">Category</label>
        <input type="text" id="product-cat" />
        <br/>
        <label htmlFor="">Price</label>
        $<input type="text" id="product-price" />
        <br/>
        <label htmlFor="">Stocked</label>
        <input type="checkbox" id="product-stocked"/>
      </form>
      <Button variant="contained" color="primary" onClick={addProductToData()}>Submit</Button>
    </Container>

  );
}

export default ProductInput;


