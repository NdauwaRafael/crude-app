/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:48 PM
 **/

import {
  SET_IS_ACTIVE,
  SET_IS_INACTIVE,
  RESET_TIMER_DATA,
} from '../../constants/ActionTypes';

let setInactivityTimer = null,
  previousComponent = null;

const inactivityTime = 5 * 60 * 1000,
  inactivityInterval = 1000;

export const setIsActive = (component) => (dispatch) => {
  let lastInteraction = new Date();

  if (setInactivityTimer) {
    if (component === previousComponent) {
      return;
    }
    previousComponent = component;
    resetTimer();
  }

  setInactivityTimer = setInterval(() => {
    // console.log('counting at.... ', component);
    if (new Date() - lastInteraction >= inactivityTime) {
      dispatch({
        type: SET_IS_INACTIVE,
        timeWentInactive: new Date(),
      });

      resetTimer();
    }
  }, inactivityInterval);

  dispatch({
    type: SET_IS_ACTIVE,
    lastInteraction: new Date(),
  });
};

export const resetTimer = () => {
  clearInterval(setInactivityTimer);
  setInactivityTimer = null;
};

export const resetTimerData = () => (dispatch) => {
  dispatch({
    type: RESET_TIMER_DATA,
  });
  resetTimer();
};
