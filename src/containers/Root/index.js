/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:40 PM
 **/

import React, {Component} from 'react';
import {PanResponder, View, Platform} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import Session from '../../components/ui/Dialog/session';
import NetworkInfo from '../../components/Network/netInfo';
import SnackBar from '../../components/MessageBar/snackBar';
import {bindActionCreators} from 'redux';
import {setIsActive, resetTimerData} from '../../Redux/actions/root';
import {connect} from 'react-redux';

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTimeout: false,
      timeWentInactive: null,
    };
  }

  _panResponder = {};

  componentDidUpdate(prevProps) {
    let {privateProps} = this.props;
    if (privateProps.componentId !== prevProps.privateProps.componentId) {
      this.props.resetTimerData();
    }
  }

  componentWillMount() {
    let vm = this;

    this.resetListener = EventRegister.addEventListener(
      'resetTimer',
      (data) => {
        vm.props.resetTimerData();
        vm._setIsActive();
      },
    );

    vm._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      // Should child views be prevented from becoming responder on first touch?
      onStartShouldSetPanResponderCapture: () => false,
      // Should child views be prevented from becoming responder of subsequent touches?
      onMoveShouldSetPanResponderCapture: () => false,
      // - Something else wants to become responder.
      //   Should this view release the responder? Returning true allows release
      onPanResponderTerminationRequest: () => true,
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      onShouldBlockNativeResponder: () => false,
    });

    this._startWatchingForInactivity();
  }
  componentDidMount() {
    this.props.resetTimerData();
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.resetListener);
  }

  _startWatchingForInactivity = () => {
    if (
      global.currentScreen === 'LoginScreen' ||
      global.currentScreen === 'InitializationScreen' ||
      global.currentScreen === 'AppScreen'
    ) {
      return this.props.resetTimerData();
    }

    console.log(global.currentScreen, 'ignored');

    setTimeout(() => {
      this.props.setIsActive(this.props.privateProps.componentId);
    }, 200);
  };

  _setIsActive = () => {
    this._startWatchingForInactivity();
  };

  _handleStartShouldSetPanResponder = () => {
    this._setIsActive();
    return false;
  };

  _handleMoveShouldSetPanResponder = () => {
    this._setIsActive();
    return false;
  };

  render() {
    const {privateProps, PassedComponent} = this.props;
    return (
      <View
        style={{flex: 1, backgroundColor: '#fff'}}
        {...this._panResponder.panHandlers}>
        <PassedComponent {...privateProps} />
        <Session show={this.props.sessionTimeout} />

        <NetworkInfo />

        <SnackBar onRef={(ref) => (this.snackBar = ref)} />
      </View>
    );
  }
}

function mapStateToProps({rootData: {sessionTimeout}}) {
  return {
    sessionTimeout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setIsActive: bindActionCreators(setIsActive, dispatch),
    resetTimerData: bindActionCreators(resetTimerData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
