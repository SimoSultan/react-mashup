import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { CssBaseline } from '@material-ui/core';


function ProductRow( { product } ) {

  const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
  
  return (

    <TableRow>
      <CssBaseline />
      <TableCell>{name}</TableCell>
      <TableCell align="right">${product.price}</TableCell>
    </TableRow>


  );
}

export default ProductRow;


