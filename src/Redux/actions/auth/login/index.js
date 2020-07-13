/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:09 PM
 **/
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  LOADING_LOGIN,
} from '../../../constants/ActionTypes';
import * as api from '../../../constants/API/fetchApi';
import moment from 'moment';
import {goHome, goToAuth} from '../../../../navigation';
import {EventRegister} from 'react-native-event-listeners';
//LOGIN
export const loginSuccess = (resp) => {
  console.log(resp, 'user');
  return {
    type: LOGIN_SUCCESS,
    user: resp,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

export const loadingLogin = (status) => {
  return {
    type: LOADING_LOGIN,
    status,
  };
};

export const getDate = () => {
  let date = moment.utc().format('YYYY-MM-DD HH:mm:ss');

  let stillUtc = moment.utc(date).toDate();

  return moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
};

export const SignIn = (username, password, easyAccess) => async (dispatch) => {
  dispatch(loadingLogin(true));
  try {
    let response = await api.login(username, password);

    if (response.status === 200){
      let responseData = await response.json();
      dispatch(loginSuccess(responseData.token, getDate()));
      goHome();
    }
    else  {

    }

  } catch (e) {
    dispatch(loginFailed());
    console.log(e);
    EventRegister.emit('showToastMessage', {
      show: true,
      message: 'Oops! An error occurred',
      timeout: 5000,
    });
  };
};

//LOGOUT
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutFailed = (error) => {
  return {
    type: LOGOUT_FAILED,
    error,
  };
};

export const Logout = () => (dispatch) => {
  global.currentScreen = 'LoginScreen';

  EventRegister.removeEventListener('checkLoginStatus');
  goToAuth();

  dispatch(logoutSuccess());
};
