import React from 'react';
import dataAW from './AgeWeight.json';
import dataTH from './TaskHours.json';
import Table from "./table";
import TablesTest from './tablesTest';
import TablePlentiful from './tablePlentiful';
//import SearchBarGeneral from './searchBarGeneral';
import TopBar from "./topBar"
import LoginHome from './LoginHome';
import JsonClass from './JsonClass';

import { Chart } from "react-google-charts";

import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

/*
var data = new google.visualization.DataTable();
data.addColumn('string', 'Task');
data.addColumn('number', 'Hours per Day');
data.addRows([
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', {v:7, f:'7.000'}]
]);
*/

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

const PieChartFoodType = () => {
  return (
  
  
<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['FoodType', 'numberCustomers'],
    ['Vegetarian', 117],
    ['Vegan', 554],
    ['Pescatarian', 35],
    ['Meat Tolerant', 782],
  ]}
  options={{
    title: 'Most Common Diet Restrictions',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  );
};

const PieChartMostDonatedFood = () => {
	return(
	
	<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Food', 'Number Donated'],
    ['Chef Boyardee Clam Chowder', 274],
    ['Trader Joe Tuna', 213],
    ['Puffins Cinnamon Cereal', 32],
    ['Dole Canned Pineapple', 23],
  ]}
  options={{
    title: 'Most Commonly Donated Food',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
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

const ColumnChartBestDonors = () => {
	return (
	
	  <Chart
    width={400}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['City', 'Orders Donated'],
      ['1662967', 8175000],
      ['1581484', 3792000],
      ['5121237', 2695000],
      ['003784', 2099000],
      ['3154331', 1526000],
    ]}
    options={{
      title: 'Number of Orders Donated',
      chartArea: { width: '30%' },
      hAxis: {
        title: 'Most Generous Donors',
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


const ColumnChartNumOrders = () => {
	return(
	
	<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Element',
      'Density',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ],
    ['Chef Boyardee Clam Chowder', 8.94, '#FFF5C3', null],
    ['Fresh Apples', 10.49, '#FF0000', null],
    ['Marie Calender Fettucine Alfredo', 19.3, 'FFFF33', null],
    ['Foster Farm Chicken Nuggets', 21.45, 'color: #DEB887', null],
  ]}
  options={{
    title: 'Orders in Place',
    width: 600,
    height: 400,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  }}
  // For tests
  rootProps={{ 'data-testid': '6' }}
/>

	);
};

const ColumnChartMostCommonlyOrdered = () => {
	return (
	
	  <Chart
    width={400}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Food', '2010 Population' ],
      ['Fresh Apples', 9235000],
      ['Fresh Bananas, CA', 3271000],
      ['Signature Kitchen Caesar Salad', 2211110],
      ['Organics Eggs', 2032110],
      ['Tropicana Orange juice', 1003670],
    ]}
    options={{
      title: 'Most Popuular Items Ordered',
      chartArea: { width: '30%' },
      hAxis: {
        title: 'Amount',
        minValue: 0,
      },
      vAxis: {
        title: 'Items',
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



function App () {
	

	
	  return (
	   
		<Router>
		<div className="App">
		
		
		<Route path="/" exact render={
		()=>{
			return (
				
			<div>
			
			
			
			<LoginHome/>
			
			
			<Link to="/dashHome"> DashBoard</Link>
			
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
			<TopBar/>
			<Link to="/dash1"> Dash 1</Link>
			<Link to="/dash2"> Dash 2</Link>
			<Link to="/dash3"> Dash 3</Link>
			<Link to="/dash4"> Dash 4</Link>
			
			<div style={{ display: 'flex', maxWidth: 900 }}>
			<h1> View 1</h1>
			
				
			  <PieChartFoodType/>
			  <ColumnChartBestDonors/>
			  <div>
					<input type="text" className="input" placeholder="Search..." />
					<ul>...</ul>
				</div>
			  <h1> View 2</h1>
			  <ColumnChartNumOrders/>
			  
			  
			  </div>
			  <div style={{ display: 'flex' }}>
			  <PieChartMostDonatedFood/>
			 
			 <div>
					<input type="text" className="input" placeholder="Search..." />
					<ul>...</ul>
				</div>
			 
			 
			  </div>
			
			
			
			<div style={{ display: 'flex' }}>
			
			<h1> View 3</h1>
			<div>
					<input type="text" className="input" placeholder="Search..." />
					<ul>...</ul>
			</div>
			 <TablePlentiful/>
			 <TablePlentiful/>
			<TablePlentiful/>
			
			<h1> View 4</h1>
			 <ColumnChart/>
			 <PieChart/>
			
			 <ColumnChartMostCommonlyOrdered/>
			 <div>
					<input type="text" className="input" placeholder="Search..." />
					<ul>...</ul>
				</div>
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
			
			
			
			
			<JsonClass/>
			
			//<Table/>
			<TablesTest/>
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
