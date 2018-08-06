//Axios is HTTP used to access RESTFul API on the Node.js backend
import axios from 'axios';

var listedJobs;
export function userSearchJob(searchContent) {

    axios.get('http://localhost:8081/user/searchJob/' + searchContent.keywords, 
    {})
    .then(function (response) {
      listedJobs = response.data.company_name
    })
    .catch(function (error) {
      console.log(error);
    });

    return listedJobs
}

