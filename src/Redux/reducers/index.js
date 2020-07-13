/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:10 PM
 **/
import {combineReducers} from 'redux';
import loginData from './auth/login';

//Root
import rootData from './root';

export default combineReducers({
  loginData,
  rootData,
});
