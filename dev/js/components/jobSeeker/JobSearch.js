//Component for job searching page

import React,{Component} from 'react';

//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';
import {Button, Row, Input, Table} from 'react-materialize';


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
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({jobSearchResults: resp})
    }

    searchJobByUserDetails(){
        var userName =localStorage.getItem("User");
        
        
    }
  
  
  render(){
    return(
        <div>
            <Row>
                <Input placeholder="Keywords" label="Search by keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}/>
                <Input placeholder="NumYearsExp" type="Number of years of expereince" label="Password" s={12} value={this.numYearsExp} onChange={this.handleTextChange.bind(this)}/>
            </Row>
            <Button onClick={this.searchJob}>Search</Button>
            <br/>
            <Button onClick={this.alertBox}>MyMatches</Button>
            <Button>Cancel</Button>
            <br />

            <Table>
                <thead style= {{color :"black"}}>
                    <tr>
                    <th data-field="name">Company Name</th>
                    <th data-field="category">Job Category</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.jobSearchResults.map(function(item, key) {
                    return (
                        <tr key = {key} style= {{color :"black"}}>
                            <td>{item.company_name}</td>
                            <td>{item.company_category}</td>
                            <td><button> Apply</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
        
    )
  }
}
export default JobSearch;
