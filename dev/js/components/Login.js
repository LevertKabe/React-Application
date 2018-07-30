import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';
import { userLoginRequest } from '../actions/loginAction'

export function successfulLogin(user)
{

}

class Login extends Component{
  constructor(props){
    super(props)
      this.state = {
        username: '',
        password: '',
        profileType: '',
        loginStatus: '',
        sucessfulLogin: false,
        }
  }

  handleTextChange(e)
  {
    var value = e.target.placeholder;
    
    switch(value) {
      case "Username":
          this.setState({ username: e.target.value});
          console.log(this.state.username);
          break;
      case "Password":
          this.setState({ password: e.target.value});
          break;
      default:
    }
  }

  handleSubmit(e)
  {
    userLoginRequest(this.state);
  }


  render(){
    return(
        <div>
 
            <Row>
                  <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Password" type="Password" label="Password" s={12} value={this.password} onChange={this.handleTextChange.bind(this)}  />
            </Row>
            <Button onClick={this.handleSubmit.bind(this)}>Sign-In</Button>
        </div>
    )
  }
}
export default Login;
