import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

function ProductCategoryRow( { category } ) {

  return (

    <TableRow>
      <TableCell colSpan="2" align="center" >
        <Typography variant="h6">{category}</Typography>
      </TableCell>
    </TableRow>

  );
}

export default ProductCategoryRow;


