import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger, Navbar, NavItem, Icon} from 'react-materialize';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Register extends Component{
  constructor(props){
    super(props)
      this.state = {
        username: '',
        password: '',
        name: '',
        address:'',
        category:'',
        keywords: '',
        resume:'',
        numOfYearsExperience:''}
  }

  handleTextChange(e)
  {
    var value = e.target.value;
    if(e.target.placeholder === "Username")
    {
      if(value.length > 20)
      {
        console.log(e.target.value)
      }
    }
  }

  render(){
    return(
      <div>
        <body>
          <Row>
                <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Password" type="Password" label="Password" s={12} value={this.password} onChange={this.handleTextChange}  />
                <Input placeholder="Employee Name" label="Employee Name" s={12} value={this.name} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Employee Address" label="Employee Address" s={12} value={this.address} onChange={this.handleTextChange}  />
                <Input placeholder="Category" label="Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Keywords" label="Keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}  />
                <Input placeholder="Resume" label="Resume" s={12} value={this.resume} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="0" label="No. years of experience" s={4} value={this.numOfYearsExperience} onChange={this.handleTextChange.bind(this)}  />
          </Row>
          <Button>Register</Button>
        </body>
      </div>
    )
  }
}
export default Register;
