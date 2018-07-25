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
    var value = e.target.value;

    this.setState({ username: e.target.value});

    console.log(this.state);

    switch(value) {
      case "Username":
          
          break;
      case "Password":
    
          break;
      case "Employee Name":
  
          break;
      case "Employee Address":
     
          break;
      case "Category":
       
          break;
      case "Keywords":
       
          break;
      default:
    }
  }

  postRegisterationDetails()
  {
    const userInfo = {
      username : this.state.employeeUsername,
      password : this.state.employeePassword,
      name : this.state.employeeName, 
      address : this.state.employeeAddress,
      category : this.state.employeeCategory
    };
    console.log(userInfo)

    axios.get('http://localhost:8081/user/' 
    + userInfo.employeeUsername + '/' 
    + userInfo.employeePassword, {
      
    })
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
                <Input placeholder="Password" type="Password" label="Password" s={15} value={this.password} onChange={this.handleTextChange}  />
                <Input placeholder="Employee Name" label="Employee Name" s={12} value={this.name} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Employee Address" label="Employee Address" s={12} value={this.address} onChange={this.handleTextChange}  />
                <Input placeholder="Category" label="Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Keywords" label="Keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}  />
                <Input placeholder="Resume" label="Resume" s={12} value={this.resume} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="0" label="No. years of experience" s={4} value={this.numOfYearsExperience} onChange={this.handleTextChange.bind(this)}  />
          </Row>
        </body>
        <Button onClick={this.postRegisterationDetails.bind(this)}>Register</Button>
      </div>
    )
  }
}
export default Register;