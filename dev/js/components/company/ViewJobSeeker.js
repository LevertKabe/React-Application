import React,{Component} from 'react';
import axios from 'axios';
import {Button, Input, Row} from 'react-materialize';
import '../../../scss/App.scss';

var resp = {};
class ViewJobSeeker extends Component{
  constructor(props){
    super(props)
      this.state = {
            employeeDetails:[], 
            searchEmployee: ''
        }
        this.viewAllEmployees = this.viewAllEmployees.bind(this);
  }

  viewAllEmployees(){
    axios.get('http://localhost:8081/user/getAllEmployees', 
        {})
        .then(function (response) {
            resp = response.data;
        })
        .catch(function (error) {
        console.log(error);
        });
        this.setState({employeeDetails: resp})
        console.log(this.state.employeeDetails);
    }

    handleTextChange(e){
    var value = e.target.placeholder;
    console.log(value);
    switch(value) {
      case "SearchEmployee":
          this.setState({ searchEmployee : e.target.value});
          break;
      default:
        }
    }

    handleSubmit(e){

    }

  render(){
    return(
        <div>
        <Row>
            <Input placeholder="SearchEmployee" label="Search Employee" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}/>
            <Button onClick={this.handleSubmit.bind(this)}>Search</Button>
            <Button onClick={this.viewAllEmployees}>View All Employees</Button>

            <table style= {{color :"black", font: "14px" }}>
                <thead>
                    <tr>
                    <th data-field="id">Employee Name</th>
                    <th data-field="name">Address</th>
                    <th data-field="price">Category</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.employeeDetails.map(function(item, key) {
                    return (
                        <tr key = {key} >
                            <td>{item.username}</td>
                            <td>{item.address}</td>
                            <td>{item.category}</td>
                            <td>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1">
                                    Default checkbox
                                </label>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </Row>
        </div>
    )
  }
}
export default ViewJobSeeker;
