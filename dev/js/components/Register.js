import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger, Navbar, Icon} from 'react-materialize';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
  constructor(props){
    super(props)
      this.state = {
        employeeUsername: '',
        employeePassword: '',
        employeeName: '',
        employeeAddress:'',
        employeeCategory:'',
        keywords: '',
        employeeResume:'',
        numOfYearsExperience:'',
        validRegisteration: false}
  }

  handleTextChange(e)
  {
    var value = e.target.placeholder;
    console.log(value);
    switch(value) {
      case "Username":
          this.setState({ employeeUsername: e.target.value});
          break;
      case "Password":
          this.setState({ employeePassword: e.target.value});
          break;
      case "Employee Name":
          this.setState({ employeeName: e.target.value});
          break;
      case "Employee Address":
          this.setState({ employeeAddress: e.target.value});
          break;
      case "Category":
          this.setState({ employeeCategory: e.target.value});
          break;
      case "Keywords":
          this.setState({ keywords: e.target.value});
          break;
      default:
    }
  }

  register()
  {
    axios.post('http://localhost:8081/user/registerEmployee', 
    {
      username : this.state.employeeUsername,
      password : this.state.employeePassword,
      name : this.state.employeeName, 
      address : this.state.employeeAddress,
      category : this.state.employeeCategory,
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render(){
    return(
      <div>
        <body>
          <Row>
                <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Password" type="Password" label="Password" s={15} value={this.password} onChange={this.handleTextChange.bind(this)}  />
                <Input placeholder="Employee Name" label="Employee Name" s={12} value={this.name} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Employee Address" label="Employee Address" s={12} value={this.address} onChange={this.handleTextChange.bind(this)}  />
                <Input placeholder="Category" label="Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Keywords" label="Keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}  />
                <Input placeholder="Resume" label="Resume" s={12} value={this.resume} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="0" label="No. years of experience" s={4} value={this.numOfYearsExperience} onChange={this.handleTextChange.bind(this)}  />
          </Row>
        </body>
        <Button onClick={this.register.bind(this)}>Register</Button>
      </div>
    )
  }
}
export default Register;