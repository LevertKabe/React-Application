import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Register from '../components/jobSeeker/Register';
import Login from '../components/jobSeeker/Login';
import JobSearch from '../components/jobSeeker/JobSearch';
import CompanyRegister from '../components/company/Register';
import ViewJobSeeker from '../components/company/ViewJobSeeker';
import AddJob from '../components/company/AddJob';
import '../../scss/style.scss';

class CompanyTab extends Component
{
    render(){
        return(
            <nav>
            <Router>
                <div className="nav-wrapper">
                    <ul>
                        <li ><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/viewjobseeker'}>View Job Applications</Link></li>
                        <li><Link to={'/addJob'}>Add New Vancancies</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/register' component={CompanyRegister} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/viewjobseeker' component={ViewJobSeeker} />
                        <Route exact path='/addJob' component={AddJob} />
                    </Switch>
                </div>
                </Router>
                </nav>
        )
    }
}

class EmployeeTab extends Component
{
    render(){
        return(
            <nav>
            <Router>
                <div className="nav-wrapper">
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
                </nav>
        )
    }
}


class App extends Component{

    changeToCompany(e){
        localStorage.setItem("UserType", "company");
        console.log(localStorage.getItem("UserType"));
    }
    changeToJobSeeker(e){
        localStorage.setItem("UserType", "jobseeker");
        console.log(localStorage.getItem("UserType"));
    }


    render(){
        return(
            <div><h1>
         <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a href="#jobSeeker" onClick={this.changeToJobSeeker.bind(this)}>Job Seeker</a></li>
                <li className="tab col s3"><a class="active" href="#company" onClick={this.changeToCompany.bind(this)}>Company</a></li>
              </ul>
            </div>
            <div id="jobSeeker" value="employee" className="col s12" ><EmployeeTab/></div>
            <div id="company" value="company"className="col s12" ><CompanyTab/></div>
          </div>
        </h1></div>
        )
    }
}
export default App;