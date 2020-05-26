import React, {Component } from 'react'
import { Chart } from "react-google-charts";

//something is wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

class GraphsFoodTypes extends Component{
	
	
	render(){
		
	return(
	<div>
		
	 {/* <h1>yooo</h1>  */}
	{/* <PieChartFoodType/> */}
	 {/* {this.props.chartData.map(chartData => (
          
			  <p> heyo</p>
		   
          ))}	  */}

<Chart
    width={500}
    height={300}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={this.props.chartData}
    options={{
      title: 'Food Types',
      chartArea: { width: '80%' },
      hAxis: {
        title: 'FoodID',
        minValue: 0,
      },
      vAxis: {
        title: 'Donations',
      },
    }}
    legendToggle
  />
{/* 	 
	 <Chart
		width={'500px'}
	height={'300px'}
		chartType="BarChart"
		loader={<div>Loading Chart</div>}
        data={
			this.props.chartData
		}
        options={{
          chartArea: {
            width: '50%',
          },
          title: 'EUR Price',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
	 */}
	
	</div>	
		)
	}
}

export default GraphsFoodTypes;
