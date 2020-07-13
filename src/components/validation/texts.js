/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:57 PM
 **/

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class validationText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.error ? (
      <Text style={errorTextStyles.error}>{this.props.message}</Text>
    ) : null;
  }
}

const errorTextStyles = StyleSheet.create({
  default: {
    borderBottomWidth: 1,
    borderBottomColor: '#A2A2A3',
  },
  error: {
    marginTop: 0,
    color: 'red',
  },
});

export default validationText;
