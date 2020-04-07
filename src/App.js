import React from 'react';
import dataAW from './AgeWeight.json';
import dataTH from './TaskHours.json';

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
const PieChart = () => {
  return (
  
  
<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  );
};


const ColumnChart = () => {
	return (
	
	  <Chart
    width={400}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000],
    ]}
    options={{
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '30%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    }}
    legendToggle
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
			
			<div style={{ display: 'flex', maxWidth: 900 }}>
			  <PieChart/>
			  <ColumnChart/>
			  <PieChart/>
			  <ColumnChart/>
			</div>
			<div style={{ display: 'flex' }}>
			<PieChart/>
			 <ColumnChart/>
			 <PieChart/>
			 <ColumnChart/>
			</div>
			
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
			
			{
				dataAW.map( (dataDetail, index) => {
										return <h1> {dataDetail.Age}</h1>
									} 
						
						   )
			}
			
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
