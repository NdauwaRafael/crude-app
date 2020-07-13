/**
 * @format
 */

import React from 'react';
import {YellowBox} from 'react-native';
import {goToRootInitializer} from './src/navigation';
global.currentScreen = 'AppScreen';

YellowBox.ignoreWarnings([
  'Require cycle:',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Setting a timer',
]);

goToRootInitializer();
