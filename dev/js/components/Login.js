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

        this.username = this.username.bind(this);

  }
  handleTextChange(event)
  {
    alert('You changed');
  }

  render(){
    return(
      <div>
        <body>
          <Row>
                <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange} />
                <Input placeholder="Password" type="Password" label="Password" s={12} value={this.password} onChange={this.handleTextChange}  />

          </Row>
          <Button>Sign In</Button>
        </body>
          
      </div>
    )
  }
}
export default Login;