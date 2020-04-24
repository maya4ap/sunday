import React, {Component } from 'react'
//import GraphsTwo from './GraphsTwo';
import Sample from "./sample.json";

class JsonByWeek extends Component{
		
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

            const chartDataA = [["key", "val"]]
            console.log(Sample[0].meal_name);
            for (let i = 0; i < Sample.length; i += 1) {
				chartDataA.push([Sample[i].week_affected, Sample[i].total])
              }
              console.log("chartDataA");
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
		{/* <GraphsTwo chartData = {this.state.chartData}/> */}
	 
		
	
	</div>	
		);
	}
}

export default JsonByWeek;


	