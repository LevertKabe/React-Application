//Componenet for login page for a job seeker

import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';
import { userLoginRequest } from '../../actions/jobseeker/loginAction'
import { connect } from 'react-redux';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import '../../../scss/App.scss';
import DropdownList from '../Dropdown'

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
         <input placeholder="Username" label="Username" value={this.username} onChange={this.handleTextChange.bind(this)} />
         <input placeholder="Password" type="Password" label="Password"  value={this.password} onChange={this.handleTextChange.bind(this)} />
         <div style={{display: 'flex', justifyContent: 'center'}} >
        </div>
            <Button onClick={this.handleSubmit.bind(this)}>Sign-In</Button>
        </div>
    )
  }
}
export default Login;
