import { SET_CURRENT_USER } from '../actions/types.js';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  console.log(action.type);
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        user: action.user
      };
    default: return state;
  }
}