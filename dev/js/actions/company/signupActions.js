//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';

//Service to call API to create a company to register
export function companySignupRequest(companyData) {
    axios.post('http://localhost:8081/user/registerCompanies', 
    {
      companyName : companyData.companyName,
      companyPassword : companyData.companyPassword,
      companyAddress : companyData.companyAddress,
      companyCategory : companyData.companyCategory,
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
