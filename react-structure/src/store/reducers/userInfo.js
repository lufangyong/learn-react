import * as actionTypes from '../constants/userInfo';

export default function userInfo(state = { name: 'demo' }, action) {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return action.payload;
    case actionTypes.UPDATE_USER_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
