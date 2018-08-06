import React,{Component} from 'react';

//Axios is HTTP used to access RESTFul API on the Node.js backend
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
        if (localStorage.getItem("User") == "" && localStorage.getItem("UserType") != "company")
        {
            alert("Please login as company before you view all job seeker");
        }
        else
        {
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

  render(){
    return(
        <div>
        <Row>
            

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
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <Input placeholder="SearchEmployee" label="Search Employee" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}/>
            <Button>Search</Button>
            <Button onClick={this.viewAllEmployees}>View All Employees</Button>
            </Row>
        </div>
    )
  }
}
export default ViewJobSeeker;
