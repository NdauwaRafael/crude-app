/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:51 PM
 **/

import {
  SET_IS_ACTIVE,
  SET_IS_INACTIVE,
  RESET_TIMER_DATA,
} from '../../constants/ActionTypes';

const initialState = {
  sessionTimeout: false,
  timeWentInactive: null,
  lastInteraction: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ACTIVE:
      return {
        ...state,
        sessionTimeout: false,
        lastInteraction: action.lastInteraction,
      };

    case SET_IS_INACTIVE:
      return {
        ...state,
        timeWentInactive: action.timeWentInactive,
        sessionTimeout: true,
      };

    case RESET_TIMER_DATA:
      return {
        ...state,
        sessionTimeout: false,
        timeWentInactive: null,
        lastInteraction: null,
      };
    default:
      return state;
  }
};
