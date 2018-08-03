import axios from 'axios';


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
