/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 11:23 PM
 **/
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Logo from '../../components/ui/Logo/Logo';

class ComingSoon extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Logo />
        <Text/>
        <Text>Page Currently Not Available</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
