/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:09 PM
 **/
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  LOADING_LOGIN,
  LOADING_USER,
  USER_SUCCESS,
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
    token: resp,
  };
};
export const userSuccess = (resp) => {
  console.log(resp, 'user');
  return {
    type: USER_SUCCESS,
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

export const loadingUser = (status) => {
  return {
    type: LOADING_USER,
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
    dispatch(loadingLogin(false));
    if (response.status === 200) {
      let responseData = await response.json();
      dispatch(loginSuccess(responseData.token, getDate()));
      goHome();
    } else {
      dispatch(loginFailed());
      return EventRegister.emit('showToastMessage', {
        show: true,
        message: "Username or password combination don't match",
        timeout: 5000,
      });
    }
  } catch (e) {
    dispatch(loginFailed());
    dispatch(loadingLogin(false));

    EventRegister.emit('showToastMessage', {
      show: true,
      message: 'Oops! An error occurred',
      timeout: 5000,
    });
  }
};

export const GetUser = () => async (dispatch) => {
  dispatch(loadingUser(true));
  try {
    let response = await api.user();
    dispatch(loadingUser(false));
    if (response.status === 200) {
      let responseData = await response.json();
      dispatch(userSuccess(responseData.data, getDate()));
    } else {
      return EventRegister.emit('showToastMessage', {
        show: true,
        message: 'Could not return user data.',
        timeout: 5000,
      });
    }
  } catch (e) {
    dispatch(loadingUser(false));

    EventRegister.emit('showToastMessage', {
      show: true,
      message: 'Oops! An error occurred',
      timeout: 5000,
    });
  }
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
