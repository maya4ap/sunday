import React, {Component } from 'react'
import { Chart } from "react-google-charts";




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
    width={400}
    height={200}
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

	
	</div>	
		)
	}
}

export default GraphsGenerousDonors;
