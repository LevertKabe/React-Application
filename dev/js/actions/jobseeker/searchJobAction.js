import axios from 'axios';
import { JOB_SEARCH } from '../types';

export const searchJob = text => ({
  type: 'JOB_SEARCH',
  payload: 'Leevert'
})
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

