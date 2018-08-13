//Component for job searching page

import React,{Component} from 'react';

//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';
import {Button, Row, Input} from 'react-materialize';
import { applyForJob } from '../../actions/jobseeker/applyForJob';
import Table, {Thead, Tbody, Tr, Th, Td} from "react-row-select-table"


var resp = {};
class JobSearch extends Component{
  constructor(props){
    super(props)
      this.state = {
        jobSearchResults:[], 
        keywords: '',
        numYearsExp: '',
        }
        this.searchJob = this.searchJob.bind(this);
  }

  handleTextChange(e)
  {
    var value = e.target.placeholder;
    
    switch(value) {
      case "Keywords":
          this.setState({ keywords: e.target.value });
          break;
      case "NumYearsExp":
          this.setState({ numYearsExp: e.target.value });
          break;
      default:
    }
  }

  searchJob(){
    axios.get('http://localhost:8081/user/searchJob/'+ this.state.keywords, 
        {})
        .then(function (response) {
            resp = response.data;
            console.log(resp);
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({jobSearchResults: resp})
    }

    searchJobByUserDetails(){
        var userName =localStorage.getItem("User");
        
    }
   
    applyForJob(item){
        console.log(item);
        var result = confirm("Are you sure you want to apply for Job: " + item.job_title+ "\nCompany: " + item.company_name);
        if (result) {
            applyForJob(result);
        }
    }
    
  render(){
    return(
        <div>
            <Row>
                <Input placeholder="Keywords" label="Search by keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}/>
                <Input placeholder="NumYearsExp" type="Number of years of expereince" s={3} label="Number of years experince" s={12} value={this.numYearsExp} onChange={this.handleTextChange.bind(this)}/>
            </Row>
            <Button onClick={this.searchJob}>Search</Button>
            <br/>
            <table >
                <thead style= {{color :"black"}}>
                    <tr>
                    <th data-field="name">Company Name</th>
                    <th data-field="title">Job Title</th>
                    <th data-field="exp">Experince required</th>
                    <th data-field="category">Category</th>
                    <th data-field="apply">Submit</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.jobSearchResults.map(function(value, key) {
                    return (    
                        <tr key = {key} style= {{color :"black"}}  >
                            <td>{value.company_name}</td>
                            <td>{value.job_title}</td>
                            <td>{value.expreq}</td>
                            <td>{value.category}</td>
                            <td onClick={this.applyForJob.bind(this,value)}><Button >APPLY</Button></td>
                        </tr>
                    )
                }.bind(this))};
                </tbody>
            </table>
            
        </div>
        
    )
  }
}
export default JobSearch;
