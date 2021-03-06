import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { Container, Box, Typography } from '@material-ui/core';

function FilterableProductTable( { products } ) {


  const [filterText, setFilterText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)

  return (


    <Container maxWidth="sm">
        <Box mt="5%"><Typography variant="h3" align="center">Products</Typography></Box>
        
        <Box m="2rem">
        <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
            onFilterTextChange={text => setFilterText(text)}
            onInStockChange={stock => setInStockOnly(stock)}
        />
        <ProductTable 
            products={products} 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
        />
        </Box>

    </Container>

  );
}

export default FilterableProductTable;


