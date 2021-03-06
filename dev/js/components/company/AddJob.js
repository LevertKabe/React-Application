//Component for company to add a job required

import React,{Component} from 'react';

//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';
import {Button, Row, Input, Table} from 'react-materialize';
import { addJob } from '../../actions/company/addJob';
import '../../../scss/App.scss'

var resp = {};
class AddJob extends Component{
  constructor(props){
    super(props)
      this.state = {
        jobTitle: '',
        experienceRequired: '',
        keywords:'',
        job_description:'',
        category:'',
        company_name:'',
       joblist:[]}
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
        case "Pleaseprovidedetailsofjob":
          this.setState({ job_description: e.target.value});
            break;
        case "Keywords":
          this.setState({ keywords: e.target.value});
            break;
        case "Category":
          this.setState({ category: e.target.value});
            break;
        case "expYears":
            if(isNaN(e.target.value)){
                
                }
            else{
                    this.setState({ numOfYearsExperience: e.target.value});
                }
            break;
      default:
    }
  }

  //Button to view all job seekers
  handleSubmit(e)
  {
    //Validate if user has logged in before using any services
    if (localStorage.getItem("User") == "" && localStorage.getItem("UserType") != "company")
    {
        alert("Please login(company) before you add a job post");
    }
    else
    {
        addJob(this.state)
    }
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
                  <Input placeholder="ExperienceRequired" label="Experience Required(months)" s={15} value={this.expReq} onChange={this.handleTextChange.bind(this)}/>
                  <textarea placeholder="Pleaseprovidedetailsofjob"label="DetailJobDescription" rows="4"  cols="50" value={this.job_description} onChange={this.handleTextChange.bind(this)}>
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
                    <th data-field="apply">Applied</th>
                    <th data-field="expYears">Experience(Years)</th>
                    <th data-field="jobTitle">Job Title</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
  }
}
export default AddJob;