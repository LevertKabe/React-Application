import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem,Collection, CollectionItem} from 'react-materialize';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { userSignupRequest } from '../actions/signupActions';

class Register extends Component{
  constructor(props){
    super(props)
      this.state = {
        companyName: '',
        companyPassword: '',
        companyAddress:'',
        companyCategory:'',
        validRegisteration: false,
        selectedImage: null,}
  }

  handleTextChange(e)
  {
    var value = e.target.placeholder;
    console.log(value);
    switch(value) {
      case "CompanyName":
          this.setState({ companyName: e.target.value});
          break;
      case "Password":
          this.setState({ companyPassword: e.target.value});
          break;
      case "CompanyAddress":
          this.setState({ companyAddress: e.target.value});
          break;
      case "CompanyCategory":
          this.setState({ companyCategory: e.target.value});
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
                  <Input placeholder="CompanyName" label="Company Name" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Password" type="Company Access Password" label="Password" s={15} value={this.password} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="CompanyAddress" label="Company Address" s={12} value={this.address} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="CompanyCategory" label="Company Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
            </Row>
          <input type="file" onChange= {this.fileSelectedHandler}/>
          <button onClick={this.handleSubmit.bind(this)}>Upload Company Logo</button>
          <Button onClick={this.handleSubmit.bind(this)}>Sign-Up</Button>
        </div>
      </Router>
    )
  }
}
export default Register;