import React, {Component } from 'react'
import TablesTest from './tablesTest';
import GraphsOne from './GraphsOne';

class JsonTwo extends Component{
		
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
			const responseTemp = await fetch ('https://phaqvwjbw6.execute-api.us-west-1.amazonaws.com/dev/api/v1/kitchens')
			const jsonTemp = await responseTemp.json()
			const keys = Object.keys(jsonTemp.result)
			const values = Object.values(jsonTemp.result)
			const keyTemp = ["s","t","r","i","n","g"]
			console.log("blah bell");
			console.log(jsonTemp.result[0].kitchen_id);
			const chartDataA = [["key", "val"]]
			console.log("first bit of chartData");
			console.log(chartDataA);
			for (let i = 0; i < values.length; i += 1) {
				chartDataA.push([values[i].kitchen_name.S, parseInt(values[i].zipcode.S)])
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
		<GraphsOne chartData = {this.state.chartData}/>
	 
		
	
	</div>	
		);
	}
}

export default JsonTwo;


	