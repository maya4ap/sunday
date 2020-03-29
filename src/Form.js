import React, {Component } from 'react'

class Form extends Component{
	
	constructor(props){
		super(props)
		
		this.state = {
			foodname: ''
		}
	}
	
	handleFoodNameChange = (event) => {
		this.setState({
				foodname:event.target.value
		})
	}
	render(){
	return(
	
		<form>
		<h1>Donate</h1>
		<div>
			<label>Food Category</label>
			<select>
				<option value="cannedsoup">Canned Soup</option>
				<option value="cannedsoup">Canned Fruit</option>
				<option value="cannedsoup">Canned Fish</option>
				<option value="cannedsoup">Fresh Fruit</option>
				<option value="cannedsoup">Fresh Vegetables</option>
				<option value="cannedsoup">Fresh Poultry</option>
				<option value="cannedsoup">Fresh Pork</option>
				<option value="cannedsoup">Fresh Beef</option>
				<option value="cannedsoup">Fresh Salmon</option>
				<option value="cannedsoup">Frozen Poultry</option>
				<option value="cannedsoup">Frozen Pork</option>
				<option value="cannedsoup">Frozen Beef</option>
				<option value="cannedsoup">Frozen Salmon</option>
				
				//tagged with dairy,meat,fish,etc.
				//maybe above list is list of tags of products (ex:dole's cut pinapple=canned fruits,displays fruit after selection)
				
			</select>
		
		</div>
		
		<div>
		
		<label> Don't see your item? Enter it here </label>
		<input type='text' value={this.state.foodname}
		
		onChange={this.handleFoodNameChange}
		
		/>

		</div>
		
		
		</form>
	
		)
	}
}

export default Form
