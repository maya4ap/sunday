import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	
	  return (
	  
		<Router>
		<div className="App">

		<Route path="/" render={
		()=>{
			return (<h1>Welcome home</h1>)
		}
	}/>

		</div>
		</Router>
		
		
	  );
}

export default App;
