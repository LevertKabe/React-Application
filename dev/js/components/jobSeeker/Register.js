import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem,Collection, CollectionItem} from 'react-materialize';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { userSignupRequest } from '../../actions/jobseeker/signupActions';
require('bootstrap');

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
      case "ExpYears":
        if(isNaN(e.target.value)){
        }
        else{
          this.setState({ numOfYearsExperience: e.target.value});
        }
      break;
      default:
    }
  }

  handleSubmit(e)
  {
    userSignupRequest(this.state);
  }

  uploadFile(e){
    let files = e.target.files;
    console.log(files[0].name.split(".").pop());
    if(files[0].name.split(".").pop() == "doc"){
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
  
      reader.onload=(e) =>{
        this.state.selectedFile = e.target.result;
          console.warn("img data ", this.state.selectedFile)
      }
    }
    else{
      alert("Please ensure you have uploaded a word document file as your resume");
    }
 
  }

  render(){
    return(
        <div class="btn-group">
            <Row>
                  <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Password" type="Password" label="Password" s={15} value={this.password} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="Company Name" label="Company Name" s={12} value={this.name} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Company Address" label="Company Address" s={12} value={this.address} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="Category" label="Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Keywords" label="Keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="Resume" label="Resume" s={12} value={this.resume} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="ExpYears" type="Numbers" s={3} label="No. years of experience" s={4} value={this.numOfYearsExperience} onChange={this.handleTextChange.bind(this)}  />
                  
            </Row>
            <Button onClick={this.handleSubmit.bind(this)}>Sign-Up</Button>
            <br/>
           <input type="file" name= "file" onChange={(e)=> this.uploadFile(e)}/>   
        </div>
    )
  }
}
export default Register;