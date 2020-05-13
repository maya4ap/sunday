import React, {Component } from 'react'
import { Chart } from "react-google-charts";


const PieChartFoodType = () => {
	return (
	

<Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
  ]}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="AIzaSyA0-ZtD8J-5-9Eg8IqNoCJicok8kY6tm8MYOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/>	
 
	);
  };

class CustomerGraphsB extends Component{
	
	
	render(){
		
	return(
	<div>
	<PieChartFoodType/>

{/* <Chart
    width={800}
    height={600}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={this.props.chartData}
    options={{
      title: 'Top Donated Foods',
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
  /> */}

	
	</div>	
		)
	}
}

export default CustomerGraphsB;
