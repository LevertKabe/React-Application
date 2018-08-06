//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';

export function applyForJob(jobData) {

    axios.get('http://localhost:8081/user/loginEmployee/' + localStorage.getItem("User"), 
        {
        }
        )
        .then(function (response) {
          console.log(response.request.responseText)
          var res = response.request.responseText;
          var o=JSON.parse(res);
          var employeeID = o[0].id;
  
          axios.post('http://localhost:8081/user/applyForJob',
          {
              job_id: jobData.job_id,
              employee_id: employeeID
          }
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        })
        .catch(function (error) {
          console.log(error);
        });


}
