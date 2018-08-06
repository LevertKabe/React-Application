//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';


export function userLoginRequest(userData){
    var dataResponse;

    console.log(localStorage.getItem("UserType"));
    if(localStorage.getItem("UserType") == "jobseeker")
    {
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
            alert("Unsuccessfully sign-in ");
          }
          else
          {
            alert("Successfully sign-in");
            //setCurrentUser(userData);
            localStorage.setItem("User", userData.username);
            
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else
    {
      axios.get('http://localhost:8081/user/loginCompany/' + userData.username, 
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
            alert("Unsuccessfully sign-in ");
          }
          else
          {
            alert("Successfully sign-in");
            localStorage.setItem("User", userData.username);
            
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    return dataResponse;
}
