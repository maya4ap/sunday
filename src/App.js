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
