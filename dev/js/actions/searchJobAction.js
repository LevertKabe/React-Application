import axios from 'axios';
import {signupUser} from './index';

export function userSearchJob(searchContent) {

    axios.get('http://localhost:8081/user/searchJob/' + searchContent.keywords, 
    {
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
