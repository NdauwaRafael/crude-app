/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:19 PM
 **/

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  LOADING_LOGIN,
} from '../../../constants/ActionTypes';

const initialState = {
  isLoading: false,
  isConnected: false,
  refreshing: false,
  user: {},
  token: '',
  loggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loggedIn: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: {},
        token: '',
      };

    case LOGOUT_FAILED:

    case LOADING_LOGIN:
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
};
