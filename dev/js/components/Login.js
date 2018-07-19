import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'

class Login extends Component{
  constructor(props){
    super(props)
      this.state = {
        username: '',
        password: '',
        profileType: ''
        }
  }

  handleTextChange(e)
  {
    this.setState({ username: e.target.value});
  }

  render(){
    return(
      <div>
        <body>
          <Row>
                <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                <Input placeholder="Password" type="Password" label="Password" s={12} value={this.password} onChange={this.handleTextChange}  />
          </Row>
          <Button>Sign In</Button>
        </body>
      </div>
    )
  }
}
export default Login;
