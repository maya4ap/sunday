import React, {Component } from 'react'
//import TablesTest from './tablesTest';
import GraphsGenerousDonors from './GraphsGenerousDonors';

class JsonGenerousDonors extends Component{
		
		constructor(props)	
			{
				super(props)
				this.
				state = {
				chartData: [],
				pass: props.pass
				};
				
			}
        
			//pass in login user-id from state and have if(this.state.id = ...) then push
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
	chartFiter(){
		// var array = [this.state.chartData]; // make a separate copy of the array
  		// //var index = array.indexOf(e.target.value)
  		// //if (index !== -1) {
    	// 	array.splice(4, 1);
		// this.setState({chartData: array});
		// console.log("chartFilter chartData");
		// console.log(this.state.chartData);
  		//}
	}
	//maybe pass props from filter test
	onDefault = () => 
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
				console.log("this.state.pass");
				console.log(this.state.pass);
				if(jsonTemp.result.result[i].foodbank_id == this.state.pass)
				chartDataA.push([jsonTemp.result.result[i].donor_id, parseInt(jsonTemp.result.result[i].totalDonation)])
			  }
			console.log("second bit of chartData");
			console.log(chartDataA);

			this.setState({
				chartData:chartDataA
			})
//
			console.log("state");
			console.log(this.state.chartData);
{/* <button onClick={() => this.onFuncTwo(),this.chartFiter} className="btn btn-primary">Choose 800-000002</button> */}

		
}
	{jsonStuff()}
	
	} 
	render(){

		
		return(
	
	<div>
        {/* <h1> Hey,{this.props.pass}</h1>
		 */
		 //important prop pass test!!
		 }

		 
		<button onClick={() => this.onFuncTwo()} className="btn btn-primary">Choose 800-000002</button>
		<button onClick={() => this.onFuncThree()} className="btn btn-primary">Choose 800-000003</button>
		<button onClick={() => this.onFuncFour()} className="btn btn-primary">Choose 800-000004</button>
		<button onClick={() => this.onFuncFive()} className="btn btn-primary">Choose 800-000005</button>
		<button onClick={() => this.onFuncSix()} className="btn btn-primary">Choose 800-000006</button>
		<button onClick={() => this.onFuncSeven()} className="btn btn-primary">Choose 800-000007</button>
		<button onClick={() => this.onFuncEight()} className="btn btn-primary">Choose 800-000008</button>
		<button onClick={() => this.onFuncNine()} className="btn btn-primary">Choose 800-000009</button>
		<button onClick={() => this.onFuncTwo(),this.onFuncTwo,this.onDefault} className="btn btn-primary">Submit</button>
		<div>
			</div>

		<GraphsGenerousDonors chartData = {this.state.chartData}/>	
		
	</div>	
		);
	}
}
//get ID and only populate it with matching info
export default JsonGenerousDonors;

