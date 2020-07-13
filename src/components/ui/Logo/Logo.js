/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 7:19 PM
 **/
import React, {Component} from 'react';

import {Image} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const Logo = ({logo}) => (
  <Image
    style={{width: scale(120), height: verticalScale(100), alignSelf: 'center'}}
    source={
      logo === 'splash'
        ? require('../../../utils/images/logo.png')
        : require('../../../utils/images/logo.png')
    }
    resizeMode="contain"
  />
);

export default Logo;
