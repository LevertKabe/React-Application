import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class Home extends Component{

  render(){
    return(
      <div><h1>home</h1></div>
    )
  }
}
export default Home;
