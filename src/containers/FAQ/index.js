/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 11:22 PM
 **/
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class FAQ extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>FAQ</Text>
      </View>
    );
  }
}

function mapStateToProps({loginData: {token, user}}) {
  return {
    token,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
