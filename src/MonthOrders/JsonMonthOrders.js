import React, {Component } from 'react'
//import TablesTest from './tablesTest';
import GraphsMonthOrders from './GraphsMonthOrders';

class JsonMonthOrders extends Component{
		
		constructor(props)	
			{
				super(props)
				this.
				state = {
				chartData: []
				};
				
			}
		
	componentDidMount = () => 
	{
		const jsonStuff = async() => {
			const responseTemp = await fetch ('https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/orderstatus')
			.catch(error => console.log(error))
			const jsonTemp = await responseTemp.json()
			const keys = Object.keys(jsonTemp.result)
			const values = Object.values(jsonTemp.result)
			const keyTemp = ["s","t","r","i","n","g"]
			console.log("testtt");
			console.log(jsonTemp.result.message);
			console.log(jsonTemp.result.result[0].SwagCompName);
			const chartDataA = [["key", "val"]]
			console.log("first bit of chartData");
			console.log(chartDataA);
			for (let i = 0; i < jsonTemp.result.result.length; i += 1) {
				chartDataA.push([jsonTemp.result.result[i].Month, parseInt(jsonTemp.result.result[i].TotalOrders)])
				console.log("foodbank is");
				console.log(jsonTemp.result.result[i].foodbank_id);
			  }
			console.log("second bit of chartData");
			console.log(chartDataA);

			this.setState({
				chartData:chartDataA
			})

			console.log("state");
			console.log(this.state.chartData);


		
}
	{jsonStuff()}
	
	} 
	render(){

		
		return(
	
	<div>
		<GraphsMonthOrders chartData = {this.state.chartData}/>
	 
		
	
	</div>	
		);
	}
}

export default JsonMonthOrders;


	