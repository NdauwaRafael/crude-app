/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:12 PM
 **/

import * as routes from './api';
import fetch from 'react-native-fetch-polyfill';

const timeout = 2 * 60 * 1000;

const apiVersion = 0;

export function changeBaseUrl() {
  let uri = '';

  let unauthenticatedUrl = '';

  if (__DEV__) {
    uri = 'https://reqres.in';
  } else if (global.testUser == 'admin') {
    uri = 'https://reqres.in';
  } else {
    uri = 'https://reqres.in';
  }

  return uri;
}

export const login = function (username, password) {
  return fetch(routes.route_login(changeBaseUrl()), {
    timeout: timeout,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-VERSION': 1,
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};
