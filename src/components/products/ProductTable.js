import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


function ProductTable( { products, filterText, inStockOnly } ) {
  // generate the rows by determining which component to use based on the fact if it is a new category

  let rows = []
  let lastCategory = null

  // loop over the array of products, if the category is not equal to the last category, then a new category is ocming though so add the category row component
  // otherwise if it is the same, then add the product row component
  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    if (element.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) continue
    if (inStockOnly && !element.stocked) continue

    if (element.category !== lastCategory) {
      lastCategory = element.category
      rows.push(<ProductCategoryRow category={element.category} key={element.category} />)
    }
    rows.push(<ProductRow product={element} key={element.name} />)
  }


  return (

    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h5">Name</Typography></TableCell>
            <TableCell align="right"><Typography variant="h5">Price</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;


