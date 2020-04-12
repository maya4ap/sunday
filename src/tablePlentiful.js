import React, {Component } from 'react'
import dataAW from './AgeWeight.json';
import apData from './APIexample.json';
import foodP from './FoodPlentiful.json';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//const data = require("./APIexample");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

class table extends Component{
	
	
	render(){
	return(
	<div>
		<h1> Table </h1>
		{foodP.map( (dataDetail, index) => {
										return <h1> {"\n\n\n"}</h1>
									} 
						
						   )
	}
	
	
	<TableContainer component={Paper}>
      <Table>
        <TableHead>
		
          <TableRow>
            <TableCell>FoodID</TableCell>
            <TableCell align="right">CommonName</TableCell>
			<TableCell align="right">Expiration Date</TableCell>
			<TableCell align="right">Number Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodP.map(foodP => (
            <TableRow key={foodP.FoodID}>
              <TableCell component="th" scope="row">
                {foodP.FoodID}
              </TableCell>
              <TableCell align="right">{foodP.CommonName}</TableCell>
			  <TableCell align="right">{foodP.ExpirationDate}</TableCell>
			  <TableCell align="right">{foodP.NumberAvailable}</TableCell>
            </TableRow>
          ))}
		    
		  
		  <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">blah</TableCell>
          </TableRow>
		  
        </TableBody>
      </Table>
    </TableContainer>
	
	 
	
	
	</div>	
		)
	}
}

export default table;
