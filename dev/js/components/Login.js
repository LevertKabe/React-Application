import React,{Component} from 'react';
import {Button, Row, Input, Dropdown, NavItem, trigger} from 'react-materialize'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';

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
      <Router>
        <div>
          <body>
            <Row>
                  <Input placeholder="Username" label="Username" s={12} value={this.username} onChange={this.handleTextChange.bind(this)} />
                  <Input placeholder="Password" type="Password" label="Password" s={12} value={this.password} onChange={this.handleTextChange.bind(this)}  />
            </Row>
            <Button>Sign In</Button>
            
            <Button>
              <Link to= {'/register'}>Register</Link>
            </Button>

            <Switch>
              <Route exact path='/register' component={Register} />
            </Switch>
          </body>
        </div>
      </Router>
    )
  }
}
export default Login;
