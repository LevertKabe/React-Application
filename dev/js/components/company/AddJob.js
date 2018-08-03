import React,{Component} from 'react';
import {Button, Row, Input, Table} from 'react-materialize';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { companySignupRequest } from '../../actions/company/signupActions';
require('bootstrap');

class AddJob extends Component{
  constructor(props){
    super(props)
      this.state = {
        jobTitle: '',
        experienceRequired: '',
        keywords:'',
        category:'',}
  }

  handleTextChange(e)
  {
    var value = e.target.placeholder;
    console.log(value);
    switch(value) {
      case "Jobtitle":
          this.setState({ jobTitle: e.target.value});
          break;
      case "ExperienceRequired":
          this.setState({ experienceRequired: e.target.value});
          break;
      case "Keywords":
          this.setState({ keywords: e.target.value});
          break;
      case "Category":
          this.setState({ category: e.target.value});
          break;
      default:
    }
  }

  handleSubmit(e)
  {
    companySignupRequest(this.state);
  }

  fileSelectedHandler(event){
      this.setState({
        selectedFile : event.target.files[0],})
  }

  render(){
    return(
      <div>
            <Row>
                  <Input placeholder="Jobtitle" label="Job Title" s={12} value={this.jobTitle} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="ExperienceRequired" label="Experience Required" s={15} value={this.expReq} onChange={this.handleTextChange.bind(this)}/>
                  <textarea placeholder="Please provide details of job"label="DetailJobDescription" rows="4" cols="50">
                  </textarea>
                  <Input placeholder="Keywords" label="Keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}  />
                  <Input placeholder="Category" label="Category" s={12} value={this.category} onChange={this.handleTextChange.bind(this)} />
                  <Button onClick={this.handleSubmit.bind(this)}>Add</Button>
                  <Button onClick={this.handleSubmit.bind(this)}>Update</Button>
                  <Button onClick={this.handleSubmit.bind(this)}>Close</Button>
            </Row>

             <ul class="list-group">
              <li class="list-group-item">First item</li>
              <li class="list-group-item">Second item</li>
              <li class="list-group-item">Third item</li>
            </ul>
            <Table>
                <thead>
                    <tr>
                    <th data-field="id">Category</th>
                    <th data-field="name">Applied</th>
                    <th data-field="price">Experience(Years)</th>
                    <th data-field="price">Job Title</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
  }
}
export default AddJob;