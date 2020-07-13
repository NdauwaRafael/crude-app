/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:47 PM
 **/

import React, {Component} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {EventRegister} from 'react-native-event-listeners';

class networkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      toastVisible: false,
    };
  }

  componentDidMount() {
    NetInfo.addEventListener((state) => {
      this.handleConnectivityChange(state.isConnected);
    });

    // this.checkNetworkStatus();
  }

  componentWillUnmount() {
    // this.props.onRef(undefined);
    //
    // NetInfo.isConnected.removeEventListener(
    //   'connectionChange',
    //   this.handleConnectivityChange,
    // );
  }

  handleConnectivityChange = (isConnected) => {
    this.setState({isConnected});

    global.isConnected = isConnected;

    if (isConnected === false) {
      this.setState({toastVisible: true});

      EventRegister.emit('showToastMessage', {
        show: true,
        message: 'No internet connection',
        timeout: 0,
      });
    } else if (isConnected && this.state.toastVisible) {
      EventRegister.emit('showToastMessage', {
        show: false,
        message: 'No internet connection',
        timeout: 0,
      });
    }
  };

  checkNetworkStatus() {
    NetInfo.isConnected.fetch().done((isConnected) => {
      this.setState({isConnected});

      if (isConnected === false) {
        EventRegister.emit('showToastMessage', {
          message: 'No internet connection',
          timeout: 5000,
        });
      }
    });

    return this.state.isConnected;
  }

  render() {
    return null;
  }
}

export default networkInfo;
