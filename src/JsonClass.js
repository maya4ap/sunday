import React, {Component } from 'react'
import TablesTest from './tablesTest';

class JsonClass extends Component{
		
		constructor(props)	
			{
				super(props)
				this.
				state = {
				kitchen: []
				};
				
			}
		
	componentDidMount = () => 
	{
		const jsonStuff = async() => {
			const responseTemp = await fetch ('https://phaqvwjbw6.execute-api.us-west-1.amazonaws.com/dev/api/v1/kitchens')
			const jsonTemp = await responseTemp.json()

			
			console.log(jsonTemp.message);
			console.log(jsonTemp.result[0].kitchen_name);
			this.setState({kitchen: jsonTemp.result});
			console.log("state");
			console.log(this.state.kitchen);
			

		
}
	{jsonStuff()}
	
	} 
	render(){

		if(!this.state.kitchen.length){
			return <div>didnt get a kitchen</div>
		}
		return(
	//<TablesTest food = {this.state.food}	/>
	<div>

	 
		<p>
			{/* Hi */}
		</p>
	
		{/* {this.state.kitchen.map(oneKitchen => (
				<div>{oneKitchen.kitchen_name.S.toString()} </div>  
		)
		)} */}
	  
	<TablesTest kitchen = {this.state.kitchen}/>
	  {/* <TablesTest kitchen = {this.state.kitchen} />
	  */}
	
	
	
	</div>	
		);
	}
}

export default JsonClass;


	