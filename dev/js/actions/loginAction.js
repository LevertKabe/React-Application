import axios from 'axios';
import {selectUser} from './index';
import setAuthorizationToken from '../utils/setAuthorizationToken.js'
import jwtDecode from 'jwt-decode';
import {SET_CURRENT_USER} from './types.js'
import Login from '../components/Login';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userLoginRequest(userData){
    console.log(userData);
    var dataResponse;
    axios.get('http://localhost:8081/user/loginEmployee/' + userData.username, 
    {
      username : userData.username,
      password : userData.password,
    }
    )
    .then(function (response) {
      console.log(response);
      console.log(response.request.responseText)
      dataResponse =  response.request.responseText;

      if(response.request.responseText === "[]")
      {
        console.log("Unsucessful login");
        
      }
      else
      {
        console.log("Sucessful login");
        setCurrentUser(userData);
        console.log(userData)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    return dataResponse;
}

// export function login(data) {
//   return dispatch => {
//     return axios.post('http://localhost:8081/user/loginEmployee/'+ data.username,{username :data.username, password: data.password} ).then(res => {
//       console.log(res);
//       const token = res.data.token;
//       localStorage.setItem('jwtToken', token);
//       setAuthorizationToken(token);
//       dispatch(setCurrentUser(jwtDecode(token)));
//     });
//   }
// }

// export function logout() {
//   return dispatch => {
//     localStorage.removeItem('jwtToken');
//     setAuthorizationToken(false);
//     dispatch(setCurrentUser({}));
//   }
// }
