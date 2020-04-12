import React, {Component } from 'react'
import TablesTest from './tablesTest';

class JsonClass extends Component{
		
		constructor(props)	
			{
				super(props)
				this.state = {
					food: [],
					banks: []
				}
				
			}
		
	componentDidMount = () => 
	{
		const jsonStuff = async() => {
			const responseTemp = await fetch ('https://api.hashify.net/hash/sha256/hex?value=password/')
			const jsonTemp = await responseTemp.json()

			
			console.log(jsonTemp.Digest);
	//     const response = await fetch(
    //   'https://feed-the-hungry-admin.netlify.com/api/banks/' + this.props.banks.id + '/'
    // )
    // const json = await response.json()
	
	// const responseFood = await fetch(
    //   'https://feed-the-hungry-admin.netlify.com/api/food/' + this.props.banks.id + '/'
	//  )
	// const jsonFood = await responseFood.json() 
	  
	 
	//  this.setState()
	// 	{
	// 		food: jsonFood,
	// 		banks: json
	// 	}
		
	
		
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

export default JsonClass;


	