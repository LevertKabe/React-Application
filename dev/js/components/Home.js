import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class Home extends Component{
  constructor(props){
    super(props)
      this.state = {
        isOnline: '',
        isEmployee: '',
        isEmployer: ''
        }
  }

  render(){
    return(
      <Router>
        <div>
            <ul>
                <li><Link to= {'/'}>Home</Link></li>
                <li><Link to= {'/register'}>Register</Link></li>
                <li><Link to= {'/login'}>Login</Link></li>
            </ul>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
            </Switch>
    
        </div>
      </Router>
    )
  }
}
export default Home;
