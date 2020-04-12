import React, {Component } from 'react'
import TablesTest from './tablesTest';

class jsonClass extends Component{
		
		constructor(props)	
			{
				this.state = {
					food: [],
					banks: []
				}
				
			}
		
	componentDidMount = () => 
	{
		const jsonStuff = async() => {
	    const response = await fetch(
      'https://feed-the-hungry-admin.netlify.com/api/banks/' + this.props.banks.id + '/'
    )
    const json = await response.json()
	
	const responseFood = await fetch(
      'https://feed-the-hungry-admin.netlify.com/api/food/' + this.props.banks.id + '/'
	 )
	const jsonFood = await responseFood.json() 
	  
	 
	 this.setState()
		{
			food: jsonFood,
			banks: json
		}
		
	
		
}
	
	} 
	render(){
	
	<TablesTest food = {this.state.food}
	/>
	
	
	
	
	
	 
	
	
	</div>	
		)
	}
}

export default table;


	