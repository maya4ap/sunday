//Json2
import React, {Component } from 'react'
import TablesTest from './tablesTest';

class JsonTwo extends Component{
		
		constructor(props)	
			{
				super(props)
				this.state = {
	
				}
				
			}
		
	componentDidMount = () => 
	{
		const jsonStuff = async() => {
			const responseTemp = await fetch ('https://api.randomuser.me/')
			const jsonTemp = await responseTemp.json()

			
			console.log(jsonTemp.results[0]);

		
}
	{jsonStuff()}
	
	} 
	render(){
		return(
	<TablesTest food = {this.state.food}
	/>
	

	
	
	
	 
	
	
	//</div>	
		)
	}
}

export default JsonTwo;


	