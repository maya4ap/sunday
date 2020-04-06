import React from 'react';


import { Chart } from "react-google-charts";

import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

/*
* Sunday
* comment
*/

const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};
const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];
const ExampleChart = () => {
  return (
  
  
 <Chart
  width={1000}
  height={350}
  chartType="Calendar"
  loader={<div>Loading Chart</div>}
  data={[
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],
    [new Date(2013, 1, 4), 38177],
    [new Date(2013, 1, 5), 38705],
    [new Date(2013, 1, 12), 38210],
    [new Date(2013, 1, 13), 38029],
    [new Date(2013, 1, 19), 38823],
    [new Date(2013, 1, 23), 38345],
    [new Date(2013, 1, 24), 38436],
    [new Date(2013, 2, 10), 38447],
  ]}
  options={{
    title: 'Red Sox Attendance',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  );
};


const particleOpt ={
            		particles: {
						number: {
							value:150,
							density:{
								enable:true,
								value_area: 800
							}
						}
            		}
            	}

function App() {
	
	  return (
	  
		<Router>
		<div className="App">

		<Route path="/" exact render={
		()=>{
			return (
			
			<div>
			
			
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
			
			
			
			<Particles 
              params={particleOpt}
           
            />
			</div>
			
			)
		}
	}/>
	<Route path="/donate" exact render={
		()=>{
			return (
			<div>
			<Form/>
			
			
			<Particles 
              params={particleOpt}
           
            />
			</div>
			)
		}
	}/>
	
	<Route path="/dashHome" exact render={
		()=>{
			return (
			<div>
			
			
			
			<Particles 
              params={particleOpt}
           
            />
			</div>
			)
		}
	}/>
	
		<Route path="/dash1" exact render={
		()=>{
			return (
			<div>
			
			
			
			
			
			
			<ExampleChart/>
			<Particles 
              params={particleOpt}
           
            />
			</div>
			)
		}
	}/>
	
		<Route path="/dash2" exact render={
		()=>{
			return (
			<div>
			
			
			
			<Particles 
              params={particleOpt}
           
            />
			</div>
			)
		}
	}/>
	
		<Route path="/dash3" exact render={
		()=>{
			return (
			<div>
			
			
			
			<Particles 
              params={particleOpt}
           
            />
			</div>
			)
		}
	}/>
	
		<Route path="/dash4" exact render={
		()=>{
			return (
			<div>
			
			
			
			<Particles 
              params={particleOpt}
           
            />
			
			
			
			
			</div>
			)
		}
	}/>

		</div>
		</Router>
		
		
	  );
}

export default App;
