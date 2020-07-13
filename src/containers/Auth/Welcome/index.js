/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:50 PM
 **/
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Button from '../../../components/ui/UiButton';
import Logo from '../../../components/ui/Logo/Logo';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
global.currentScreen = 'LoginScreen';

class Welcome extends Component {
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

    this.goToLogin = this.goToLogin.bind(this);

    global.currentScreen = 'LoginScreen';
  }

  componentDidMount(startState) {
    global.currentScreen = 'LoginScreen';
  }

  goToLogin() {
    Navigation.push(this.props.componentId, {component: {name: 'Login'}});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{minHeight: '10%'}}>
          <Text style={styles.pageHead}>Welcome to M-Power App</Text>
        </View>
        <Logo />
        <View style={{flex: 2, justifyContent: 'flex-end'}}>
          <Text style={{textAlign: 'center', color: '#3f4441', fontSize: 16}}>
            I am new to M-POWER.
          </Text>

          <View style={styles.button_container}>
            <Button
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {name: 'Registration'},
                })
              }
              label="Register an Account Now"
              customStyle={styles.register}
              textStyle={{
                textAlign: 'center',
                color: '#fff',
                fontSize: responsiveFontSize(2),
              }}
            />
          </View>

          <View style={styles.button_container}>
            <Button
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {name: 'Login'},
                })
              }
              label="Am already with Mpower"
              customStyle={styles.login}
              textStyle={{
                textAlign: 'center',
                color: '#5c24fc',
                fontSize: responsiveFontSize(2),
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 40,
  },
  pageHead: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff',
  },
  button_container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  register: {
    backgroundColor: '#F68A1F',
  },
  login: {
    borderWidth: 1,
    borderColor: '#3f4441',
  },
});
export default Welcome;
