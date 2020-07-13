/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:27 PM
 **/
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './register';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      backgroundColor: '#fff',
      leftButtonColor: 'black',
      barStyle: 'default',
      noBorder: true,
      background: {
        color: '#fff',
        translucent: true,
        blur: false,
      },
      backButton: {
        color: '#000',
        visible: true,
      },
    },
    statusBar: {
      backgroundColor: '#fff',
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
  });

export const goToRootInitializer = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setDefaultOptions();
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'App',
              },
            },
          ],
        },
      },
    });
  });
};

export const goToAuth = () => {
  registerScreens();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Welcome',
        children: [
          {
            component: {
              name: 'Welcome',
            },
          },
        ],
      },
    },
  });
};

let homeIcon;
let productsIcon;
let contactIcon;
let accountIcon;

Icon.getImageSource(
  Platform.OS === 'ios' ? 'ios-home' : 'md-home',
  30,
  '#828282',
).then((source) => {
  homeIcon = source;
});
Icon.getImageSource(
  Platform.OS === 'ios' ? 'ios-albums' : 'md-albums',
  30,
  '#828282',
).then((source) => {
  productsIcon = source;
});
Icon.getImageSource(
  Platform.OS === 'ios' ? 'ios-call' : 'md-call',
  30,
  '#828282',
).then((source) => {
  contactIcon = source;
});
Icon.getImageSource(
  Platform.OS === 'ios' ? 'ios-person' : 'md-person',
  30,
  '#828282',
).then((source) => {
  accountIcon = source;
});

export const goHome = () => {
  registerScreens();
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'Home',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Home',
                  icon: homeIcon,
                  selectedIconColor: '#006a5b',
                  selectedTextColor: '#006a5b',
                },
                topBar: {
                  drawBehind: true,
                  visible: false,
                  animate: false,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Contact',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Contact',
                  fontSize: 12,
                  icon: contactIcon,
                  selectedIconColor: '#006a5b',
                  selectedTextColor: '#006a5b',
                },
                topBar: {
                  drawBehind: true,
                  visible: false,
                  animate: false,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Accounts',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Accounts',
                  fontSize: 12,
                  icon: accountIcon,
                  selectedIconColor: '#006a5b',
                  selectedTextColor: '#006a5b',
                },
                topBar: {
                  drawBehind: true,
                  visible: false,
                  animate: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
