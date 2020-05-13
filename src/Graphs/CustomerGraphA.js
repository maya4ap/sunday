import React, {Component } from 'react'
// import GraphsTopDonations from './GraphsTopDonations';

class CustomerGraphA extends Component{
		
		constructor(props)	
			{
				super(props)
				this.
				state = {
				chartData: []
				};
				
			}
			
			onFuncOne()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000001"
				})
				console.log(this.state.pass);
			}
			onFuncTwo()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000002"
				})
				console.log(this.state.pass);
			}
		
			onFuncThree()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000003"
				})
				console.log(this.state.pass);
			}
		
			onFuncFour()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000004"
				})
				console.log(this.state.pass);
			}
		
			onFuncFive()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000005"
				})
				console.log(this.state.pass);
			}
		
			onFuncSix()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000005"
				})
				console.log(this.state.pass);
			}
		
			onFuncSeven()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000007"
				})
				console.log(this.state.pass);
			}
		
			onFuncEight()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000008"
				})
				console.log(this.state.pass);
			}
		
			onFuncNine()
			{
				console.log("onFunc");
				this.setState({
					//pass: this.state.pass + 3
					pass: "800-000009"
				})
				console.log(this.state.pass);
			}		
		
	onDefault = () => 
	{
		const jsonStuff = async() => {
			const responseTemp = await fetch ('https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/itemdonations')
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
				if(jsonTemp.result.result[i].foodbank_id == this.state.pass)
				chartDataA.push([jsonTemp.result.result[i].foodID, parseInt(jsonTemp.result.result[i].TotalDonation)])
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
		<button onClick={() => this.onFuncOne()} className="btn btn-primary">Choose 800-000001</button>
		<button onClick={() => this.onFuncTwo()} className="btn btn-primary">Choose 800-000002</button>
		<button onClick={() => this.onFuncThree()} className="btn btn-primary">Choose 800-000003</button>
		<button onClick={() => this.onFuncFour()} className="btn btn-primary">Choose 800-000004</button>
		<button onClick={() => this.onFuncFive()} className="btn btn-primary">Choose 800-000005</button>
		<button onClick={() => this.onFuncSix()} className="btn btn-primary">Choose 800-000006</button>
		<button onClick={() => this.onFuncSeven()} className="btn btn-primary">Choose 800-000007</button>
		<button onClick={() => this.onFuncEight()} className="btn btn-primary">Choose 800-000008</button>
		<button onClick={() => this.onFuncNine()} className="btn btn-primary">Choose 800-000009</button>
		<button onClick={() => this.onFuncTwo(),this.onFuncTwo,this.onDefault} className="btn btn-primary">Submit</button>
	
		{/* <GraphsTopDonations chartData = {this.state.chartData}/> */}
	 
		
	
	</div>	
		);
	}
}

export default CustomerGraphA;


	