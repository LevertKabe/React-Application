import axios from 'axios';
import {signupUser} from './index';

export function userSignupRequest(userData) {
    axios.post('http://localhost:8081/user/registerEmployee', 
    {
      username : userData.employeeName,
      password : userData.employeePassword,
      name : userData.employeeName, 
      address : userData.employeeAddress,
      category : userData.employeeCategory,
    }
    )
    .then(function (response) {
      console.log(response);
      signupUser(userData);
    })
    .catch(function (error) {
      console.log(error);
    });
}
