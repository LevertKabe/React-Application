import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import JobSearch from './JobSearch';
import '../../scss/style.scss';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li ><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/searchJob'}>Search For Job</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/searchJob' component={JobSearch} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;
