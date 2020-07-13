import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import {goToAuth, goHome} from './src/navigation';

class App extends Component {
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

  componentDidMount() {
    global.currentScreen = 'AppScreen';

    setTimeout(() => {
      this.props.loggedIn ? goHome() : goToAuth();
    }, 2000);
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

const mapStateToProps = ({loginData: {loggedIn}}) => ({
  loggedIn,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
