/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:31 PM
 **/
import React from 'react';

//Redux
import {Provider} from 'react-redux';
import store from '../Redux';

//Navigation
import {Navigation} from 'react-native-navigation';
import {RNNDrawer} from 'react-native-navigation-drawer-extension';
import SideMenu from '../components/Navigation/SideMenu';

import RootComponent from '../containers/Root';

//Initial Screens
import App from '../../App';

//Auth
import Welcome from '../containers/Auth/Welcome';

import Login from '../containers/Auth/Login';

import Registration from '../containers/Auth/Registration';

//Home
import Home from '../containers/Home';

import Accounts from '../containers/Accounts';
import Contact from '../containers/Contact';

export function registerScreens() {
  //AUTH
  Navigation.registerComponent(
    'Welcome',
    () => (props) => (
      <Provider store={store}>
        <RootComponent
          key="Welcome"
          PassedComponent={Welcome}
          privateProps={props}
        />
      </Provider>
    ),
    () => Welcome,
  );

  Navigation.registerComponent(
    'Login',
    () => (props) => (
      <Provider store={store}>
        <RootComponent PassedComponent={Login} privateProps={props} />
      </Provider>
    ),
    () => Login,
  );

  //AUTH _ Register
  Navigation.registerComponent(
    'Registration',
    () => (props) => (
      <Provider store={store}>
        <RootComponent PassedComponent={Registration} privateProps={props} />
      </Provider>
    ),
    () => Registration,
  );

  //APP
  Navigation.registerComponent(
    'App',
    () => (props) => (
      <Provider store={store}>
        <RootComponent key="App" PassedComponent={App} privateProps={props} />
        {/*<App {...props} />*/}
      </Provider>
    ),
    () => App,
  );

  //Home
  Navigation.registerComponent(
    'Home',
    () => (props) => (
      <Provider store={store}>
        <RootComponent PassedComponent={Home} privateProps={props} />
        {/*<Home {...props} />*/}
      </Provider>
    ),
    () => Home,
  );

  //Contact
  Navigation.registerComponent(
    'Contact',
    () => (props) => (
      <Provider store={store}>
        <RootComponent PassedComponent={Contact} privateProps={props} />
        {/*<Home {...props} />*/}
      </Provider>
    ),
    () => Contact,
  );

  //Accounts
  Navigation.registerComponent(
    'Accounts',
    () => (props) => (
      <Provider store={store}>
        <RootComponent PassedComponent={Accounts} privateProps={props} />
        {/*<Home {...props} />*/}
      </Provider>
    ),
    () => Accounts,
  );

  //Menu
  Navigation.registerComponent(
    'navigation.Drawer',
    () => (props) => {
      let NavigationComponent = RNNDrawer(SideMenu);
      return (
        <Provider store={store}>
          <NavigationComponent {...props} />
        </Provider>
      );
    },
    () => SideMenu,
  );
}

/*
 *🗒️
 * RootComponent wraps the passed component in in a root component which is currently not supported by the used navigation library.
 * The Root Component is used to pass alll the methods that are accessible globally.
 * 😉 In case you are wondering...
 *🗒️
 */
