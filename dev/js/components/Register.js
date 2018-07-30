import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem,Collection, CollectionItem} from 'react-materialize';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { userSignupRequest } from '../actions/signupActions';

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
        validRegisteration: false,
        displayMenu: false,
        selectedFile: null,}
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

  handleSubmit(e)
  {
    userSignupRequest(this.state);
  }

  fileSelectedHandler(event){
      this.setState({
        selectedFile : event.target.files[0],
      })
  }

  fileUploadHandler() {

  }

  render(){
    return(
      <Router>
        <div>
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
          <input type="file" onChange= {this.fileSelectedHandler}/>
          <button onClick={this.handleSubmit.bind(this)}>Upload file</button>
          <Button onClick={this.handleSubmit.bind(this)}>Sign-Up</Button>
        </div>
      </Router>
    )
  }
}
export default Register;