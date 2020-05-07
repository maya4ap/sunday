import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import JsonGenerousDonors from "./GenerousDonors/JsonGenerousDonors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function consoleLog(){
   
    console.log("whattup");
    console.log(email); 
   
  }

  return (
    <div className="Login">
	<h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value) 
              
            }
            
          />
          
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login

          {/* onClick = { () => {
              setEmail(currentEmail)           
          }

          } */}
        </Button>
      </form>
      {consoleLog()}

      {/* <JsonGenerousDonors email={email} /> */}
      {}
    </div>
  );
}

//convert from functional to state and pass in the state as a prop