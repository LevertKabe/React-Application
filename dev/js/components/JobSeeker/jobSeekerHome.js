import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class jobSeekerHome extends Component{

  render(){
    return(
      <div><h1>Welcome Job Seeker!</h1></div>
    )
  }
}
export default jobSeekerHome;