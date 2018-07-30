import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize';
import { userSearchJob } from '../actions/searchJobAction';


class JobSearch extends Component{
  constructor(props){
    super(props)
      this.state = {
        keywords: '',
        numYearsExp: '',
        }
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

  handleSubmit(e)
  {
    userSearchJob(this.state);
  }

  clearField(){

  }
  
  render(){
    return(
        <div>
            <Row>
                  <Input placeholder="Keywords" label="Search by keywords" s={12} value={this.keywords} onChange={this.handleTextChange.bind(this)}/>
                  <Input placeholder="NumYearsExp" type="Number of years of expereince" label="Password" s={12} value={this.numYearsExp} onChange={this.handleTextChange.bind(this)}/>
            </Row>
            <Button onClick={this.handleSubmit.bind(this)}>Search</Button>
            <Button>MyMatches</Button>
            <Button onClick={this.clearField.bind(this)}>Cancel</Button>

        </div>
    )
  }
}
export default JobSearch;
