import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*
* Sunday
*
*/
function App() {
	
	  return (
	  
		<Router>
		<div className="App">

		<Route path="/" exact render={
		()=>{
			return (
			
			<form>
			<h1>Home</h1>
			<div>
				<label>First Name </label>
				<input type='text'/>
			</div>
			<div>
				<label>Middle Name </label>
				<input type='text'/>
			</div>
			<div>
				<label>Last Name </label>
				<input type='text'/>
			</div>
			<div>
				<label>First Name </label>
				<input type='text'/>
			</div>
			<div>
				<label>Address </label>
				<input type='text'/>
			</div>
			<div>
				<label>What is your family size? </label>
				<select>
				<option value="1"> 1</option>
				<option value="2"> 2</option>
				<option value="3"> 3</option>
				<option value="4"> 4</option>
				<option value="5"> 5</option>
				
				
				
				//tagged with dairy,meat,fish,etc.
				//maybe above list is list of tags of products (ex:dole's cut pinapple=canned fruits,displays fruit after selection)
				
			</select>
			</div>
			
					<div>
			<label>Select your income level</label>
			<select>
				<option value="10,000"> Less than 10,0000</option>
				<option value="10,000"> 10,0000-15,0000</option>
				<option value="10,000"> 15,000-20,0000</option>
				<option value="10,000"> 20,000-25,0000</option>
				<option value="10,000"> 25,000-30,0000</option>
				<option value="10,000"> 30,000-35,0000</option>
				<option value="10,000"> 35,000-40,0000</option>
				
				//tagged with dairy,meat,fish,etc.
				//maybe above list is list of tags of products (ex:dole's cut pinapple=canned fruits,displays fruit after selection)
				
			</select>
		
		</div>
			<div>
				<label>Are you a resident of the Santa Clara County? </label>
				<input type='checkbox'/>
			</div>
			<div>
				<label>Is this your permanant address? </label>
				<input type='checkbox'/>
			</div>
			</form>
			
			
			
			
			)
		}
	}/>
	<Route path="/donate" exact render={
		()=>{
			return (
			<Form/>
			//<h1>donate here!</h1>
			
			)
		}
	}/>

		</div>
		</Router>
		
		
	  );
}

export default App;
