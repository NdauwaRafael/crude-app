/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:05 PM
 **/
import {Navigation} from 'react-native-navigation';

export const goToLogin = () => {
  Navigation.setStackRoot('Auth', [
    {
      component: {
        name: 'Login',
        passProps: {
          fromBiometric: true,
        },
      },
    },
  ]);
};

export const goToPasscode = () => {
  Navigation.setStackRoot('Auth', [
    {
      component: {
        name: 'PasscodeAuthentication',
        passProps: {
          fromBiometric: true,
        },
      },
    },
  ]);
};

export const goHome = () => {
  Navigation.setStackRoot('Auth', [
    {
      component: {
        name: 'Welcome',
        passProps: {
          fromBiometric: true,
        },
      },
    },
  ]);
};
