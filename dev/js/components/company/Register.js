import React,{Component} from 'react';
import {Button, Row, Input} from 'react-materialize';
import { companySignupRequest } from '../../actions/company/signupActions';

class Register extends Component{
  constructor(props){
    super(props)
      this.state = {
        companyName: '',
        companyPassword: '',
        companyAddress:'',
        companyCategory:'',
        image:''}
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
    companySignupRequest(this.state);
  }

  uploadImage(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload=(e) =>{
      this.setState({ image : e.target.result });
        console.warn("img data ", this.state.image)
    }
  }

  render(){
    return(
      <div>
            <Row>
                  <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Password" type="Password" label="Password" s={15} value={this.password} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="Employer Name" label="Employee Name" s={12} value={this.name} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Employer Address" label="Employee Address" s={12} value={this.address} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="Company Category" label="Company Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
            </Row>
          <input type="file" onChange= {(e)=> this.uploadImage(e)}/>
          <br/>
          <img id="target" src={this.state.image}/>
          <Button onClick={this.handleSubmit.bind(this)}>Sign-Up</Button>
        </div>
    )
  }
}
export default Register;