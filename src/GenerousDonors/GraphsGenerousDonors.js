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

class GraphsGenerousDonors extends Component{
	
	
	render(){
		
	return(
	<div>
		
	{/* <h1>yooo</h1> */}
	{/* <PieChartFoodType/> */}
	{/* {this.props.chartData.map(chartData => (
          
			  <p> heyo</p>
		   
          ))}	 */}

<Chart
    width={800}
    height={600}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={this.props.chartData}
    options={{
      title: 'Number of Orders Donated',
      chartArea: { width: '80%' },
      hAxis: {
        title: 'Who Donated More?',
        minValue: 0,
      },
      vAxis: {
        title: 'Donation Vale',
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

export default GraphsGenerousDonors;
