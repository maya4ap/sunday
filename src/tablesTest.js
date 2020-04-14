import React, {Component } from 'react'
import dataAW from './AgeWeight.json';
import apData from './APIexample.json'

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
	//	console.log(this.props.food);
		
	return(
	<div>
		{/* <h1>Donate!!!~~~~~~</h1>
		<h1>Donate</h1>
		{apData.map( (dataDetail, index) => {
										return <h1> {dataDetail.SwagCompID}</h1>
									} 
						
						   )
	} */}
	
	
	<TableContainer component={Paper}>
      <Table>
        <TableHead>
		
          <TableRow>
            <TableCell>Kitchen ID</TableCell>
            <TableCell align="right">Kitchen Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.kitchen.map(kitchen => (
            <TableRow key={kitchen.kitchen_id.S}>
              <TableCell component="th" scope="row">
                {kitchen.kitchen_id.S}
              </TableCell>
              <TableCell align="right">{kitchen.kitchen_name.S}</TableCell>
              {/* <TableCell align="right">{this.props.kitchen.kitchen_name.S.toString()}</TableCell> */}
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
