import axios from 'axios';

//Service to call API to create a job POST 
export function addJob(jobData) {
    axios.post('http://localhost:8081/user/addJob', 
    {
      job_title : jobData.jobTitle,
      job_description : jobData.companyPassword,
      keywords : jobData.keywords,
      job_description: jobData.job_description,
      category : jobData.category,
      company_name : localStorage.getItem("User"),
      expreq : jobData.experienceRequired
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
