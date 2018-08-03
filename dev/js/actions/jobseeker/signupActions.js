import axios from 'axios';

export function userSignupRequest(userData) {
    axios.post('http://localhost:8081/user/registerEmployee', 
    {
      username : userData.employeeName,
      password : userData.employeePassword,
      name : userData.employeeName, 
      address : userData.employeeAddress,
      category : userData.employeeCategory,
      resume_file : userData.selectedFile
    }
    )
    .then(function (response) {
      console.log(response);
      signupUser(userData);
      alert("Successfully sign-in");
    })
    .catch(function (error) {
      console.log(error);
    });
}
