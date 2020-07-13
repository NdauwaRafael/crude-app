/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:44 PM
 **/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class Auth extends Component {
  static options(passProps) {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false,
      },
      statusBar: {
        backgroundColor: 'rgba(0,0,0, .9)',
        style: 'dark',
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      fingerPrintEnabled: false,
      passcodeEnabled: false,
    };
  }

  componentWillMount() {
    global.currentScreen = 'LoginScreen';
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    global.currentScreen = 'LoginScreen';
  }

  componentWillUnmount(): void {
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  componentDidAppear() {
    global.currentScreen = 'LoginScreen';

    setTimeout(() => {
      this.goToLogin();
    }, 3000);
  }

  goToLogin() {
    Navigation.push(this.props.componentId, {component: {name: 'Welcome'}});
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#ec148c" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  images: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(Auth);
