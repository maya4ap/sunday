import React, {Component } from 'react'
//import TablesTest from './tablesTest';
import GraphsGenerousDonors from './GraphsGenerousDonors';

class JsonGenerousDonors extends Component{
		
		constructor(props)	
			{
				super(props)
				this.
				state = {
				chartData: []
				};
				
			}
        
            //pass in login user-id from state and have if(this.state.id = ...) then push
	componentDidMount = () => 
	{
		const jsonStuff = async() => {
			const responseTemp = await fetch ('https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/donordonation')
			.catch(error => console.log(error))
			const jsonTemp = await responseTemp.json()
			const keys = Object.keys(jsonTemp.result)
			const values = Object.values(jsonTemp.result)
			const keyTemp = ["s","t","r","i","n","g"]
			console.log("testtt");

			console.log("email is ");
			console.log(this.props.email);
			console.log("foodbank id is ");
			console.log(jsonTemp.result.result[0].foodbank_id);

			console.log(jsonTemp.result.message);
			console.log(jsonTemp.result.result[0].SwagCompName);
			const chartDataA = [["key", "val"]]
			console.log("first bit of chartData");
			console.log(chartDataA);
			for (let i = 0; i < jsonTemp.result.result.length; i += 1) {
				if(jsonTemp.result.result[i].foodbank_id == "800-000001")
				chartDataA.push([jsonTemp.result.result[i].donor_id, parseInt(jsonTemp.result.result[i].totalDonation)])
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
        <h1> Hello,{this.props.email}</h1>

		<div>
				<label>Which FoodBanl? </label>
				<select>
				<option value="800-000001"> 800-000001</option>
				<option value="800-000002"> 800-000002</option>
				<option value="800-000003"> 800-000003</option>
				<option value="800-000004"> 800-000004</option>
				<option value="800-000005"> 800-000005</option>
				<option value="800-000006"> 800-000006</option>
				<option value="800-000007"> 800-000007</option>
				<option value="800-000008"> 800-000008</option>
				<option value="800-000009"> 800-000009</option>
				
				
				
				
			</select>
			</div>

		<GraphsGenerousDonors chartData = {this.state.chartData}/>	
		
	</div>	
		);
	}
}
//get ID and only populate it with matching info
export default JsonGenerousDonors;


	