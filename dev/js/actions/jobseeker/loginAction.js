import axios from 'axios';


export function userLoginRequest(userData){
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
    return dataResponse;
}
