//Combine all reducers into ONE object to save in STORE
import {combineReducers} from 'redux';

//Imported Reducers
import user from './user';
import auth from './auth';

//Combine all the reducers to save into the STORE
//This could be refered to as a the 'main' reducers

//Enable reducers to be used by store
export default combineReducers({
    user, auth
});
