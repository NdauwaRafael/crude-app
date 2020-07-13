/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:09 PM
 **/
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxMulti from 'redux-multi';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk, reduxMulti];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
