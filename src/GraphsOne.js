import React, {Component } from 'react'
import { Chart } from "react-google-charts";


const PieChartFoodType = () => {
	return (
	

		<Chart
		width={'500px'}
	height={'300px'}
		chartType="BarChart"
		loader={<div>Loading Chart</div>}
        data={
			[
				['FoodType', 'numberCustomers'],
				['Vegetarian', 117],
				['Vegan', 554],
				['Pescatarian', 35],
				['Meat Tolerant', 782],
			  ]
		}
        options={{
          chartArea: {
            width: '50%',
          },
          title: 'EUR Price',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
	
 
	);
  };

class GraphsOne extends Component{
	
	
	render(){
		
	return(
	<div>
		
	<h1>yooo</h1>
	<PieChartFoodType/>
	
	
	 
	
	
	</div>	
		)
	}
}

export default GraphsOne;
