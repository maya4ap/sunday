import React, {Component } from 'react'
import ReactDOM from "react-dom";
import GraphsTwo from './graphsTest/GraphsTwo';
import JsonThree from './graphsTest/JsonThree';
import JsonGenerousDonors from './GenerousDonors/JsonGenerousDonors';

class FilterTest extends React.Component {
    constructor(props) {
        super(props);
        this.
        state = {
            value: '800-000001'
            };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (event) =>{
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    //   <JsonGenerousDonors value = {this.state.value}/>
    }

    onFuncTwo()
    {
      console.log("onFunc");
      this.setState({
        //pass: this.state.pass + 3
        pass: "800-000002"
      })
      console.log(this.state.pass);
    }
  
    onFuncThree()
    {
      console.log("onFunc");
      this.setState({
        //pass: this.state.pass + 3
        pass: "800-000003"
      })
      console.log(this.state.pass);
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.onFuncTwo()} className="btn btn-primary">Chose 800-000002</button>
		<button onClick={() => this.onFuncThree()} className="btn btn-primary">Chose 800-000003</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a foodbank id:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="800-000001">800-000001</option>
              <option value="800-000002">800-000002</option>
              <option value="800-000003">800-000003</option>
              <option value="800-000004">800-000004</option>
              <option value="800-000005">800-000005</option>
              <option value="800-000006">800-000006</option>
              <option value="800-000007">800-000007</option>
              <option value="800-000008">800-000008</option>
              <option value="800-000009">800-000009</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        {/* <JsonGenerousDonors onSubmt = {this.handleSubmit}/> */}
        <JsonGenerousDonors pass = {this.state.value}/>

   
    
    
</div>
      );
    }
  }
  export default FilterTest;//