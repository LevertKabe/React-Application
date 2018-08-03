import axios from 'axios';


export function addJob(jobData) {
    axios.post('http://localhost:8081/user/addJob', 
    {
      job_title : jobData.jobTitle,
      job_description : jobData.companyPassword,
      keywords : jobData.keywords,
      job_description: job.job_description,
      category : jobData.category,
      companyID : jobData.companyCategory,
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
