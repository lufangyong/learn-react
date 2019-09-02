import * as actionTypes from '../constants/userInfo';

export function setUserInfo(data) {
  return {
    type: actionTypes.SET_USER_INFO,
    payload: data
  };
}

export function updateUserInfo(data) {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    payload: data
  };
}
