import axios from 'axios';


export function addJob(companyData) {
    axios.post('http://localhost:8081/user/addJob', 
    {
      job_title : companyData.companyName,
      job_description : companyData.companyPassword,
      keywords : companyData.companyAddress,
      category : companyData.companyCategory,
      companyID : companyData.companyCategory,
      expreq : companyData.companyCategory
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
