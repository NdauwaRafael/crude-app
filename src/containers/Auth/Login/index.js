/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:56 PM
 **/
import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../../../components/ui/UiButton';
import {
  Form,
  Item,
  Input,
  Header,
  Icon as IonIcon,
  Button as IconButton,
  Body,
  Left,
  Right,
  Text,
  Container,
  Content,
} from 'native-base';
import {Navigation} from 'react-native-navigation';
import ValidationComponent from 'react-native-form-validator';
import SnackBar from '../../../components/MessageBar/snackBar';
import {bindActionCreators} from 'redux';
import {SignIn} from '../../../Redux/actions/auth/login';
import {goHome} from './partials/navigationConfig';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import login from '../../../utils/styles/auth/loginStyle';

class Login extends ValidationComponent {
  static options(passProps) {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false,
      },
      statusBar: {
        backgroundColor: '#fff',
        style: 'light',
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameHasError: false,
      usernameIsValid: false,
      passwordHasError: false,
      passwordIsValid: false,
      easyAccess: false,
      showHelp: false,
    };
    this.login = this.login.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  componentDidDisappear() {
    // this.RBSheet.close();
  }

  navigateTo(name, props) {
    this.RBSheet.close();
    Navigation.push(this.props.componentId, {
      component: {
        name,
        passProps: props,
      },
    });
  }

  checkErrorInField(field) {
    return this.isFieldInError(field);
  }

  login() {
    const {username, password, easyAccess} = this.state;

    let valid = this.validate({
      username: {required: true},
      password: {required: true},
    });
    if (!valid && !easyAccess) {
      let usernameError = this.checkErrorInField('username');

      this.setState({
        usernameHasError: usernameError,
        usernameIsValid: !usernameError,
      });

      let passwordError = this.checkErrorInField('password');

      this.setState({
        passwordHasError: passwordError,
        passwordIsValid: !passwordError,
      });

      return this.snackBar.showSnackBar(
        true,
        'Please fill in the username and password fields',
        5000,
      );
    }

    this.props.SignIn(username, password);
  }

  render() {
    const {username, password} = this.state;
    const {
      loginData: {isLoading},
    } = this.props;

    return (
      <Container>
        <Header
          androidStatusBarColor="#fff"
          iosStatusbar="light-content"
          transparent={true}
          style={{backgroundColor: '#fff'}}>
          <Left>
            <IconButton transparent onPress={() => goHome()}>
              <IonIcon
                style={{
                  color: '#5c24fc',
                  fontSize: responsiveFontSize(3.4),
                }}
                name={
                  Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'
                }
              />
            </IconButton>
          </Left>
          <Body />
          <Right />
        </Header>
        <View style={{flex: 1}}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            enabled
            behavior="padding"
            contentContainerStyle={{flex: 1}}>
            <SnackBar onRef={(ref) => (this.snackBar = ref)} />
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View
                style={[
                  {
                    padding: 20,
                    paddingBottom: 40,
                    paddingTop: 0,
                    flex: 1,
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text style={styles.page_head} adjustsFontSizeToFit>
                  Welcome back
                </Text>

                <View>
                  <Form style={{marginBottom: 20}}>
                    <Item
                      style={styles.itemView}
                      success={this.state.usernameIsValid}
                      error={this.state.usernameHasError}>
                      <Input
                        ref="username"
                        style={{fontSize: responsiveFontSize(2)}}
                        onChangeText={(username) => this.setState({username})}
                        value={username}
                        placeholder="username or email"
                        placeholderTextColor="#3f4441"
                      />
                    </Item>
                    <Item
                      style={login.itemView}
                      success={this.state.passwordIsValid}
                      error={this.state.passwordHasError}>
                      <Input
                        ref="password"
                        style={{fontSize: responsiveFontSize(2)}}
                        onChangeText={(password) => this.setState({password})}
                        placeholder="**************"
                        secureTextEntry={true}
                        value={password}
                        placeholderTextColor="#3f4441"
                      />
                    </Item>
                  </Form>
                  <View style={[{paddingRight: 10, paddingLeft: 10}]}>
                    <Button
                      label="Login"
                      textStyle={styles.loginText}
                      customStyle={styles.login}
                      onPress={() => {
                        this.login();
                      }}
                      loading={isLoading}
                    />
                  </View>
                </View>

                <View style={{marginBottom: 10}}>
                  <Text style={{color: '#3f4441', paddingRight: 30}}>
                    Do you have an account?
                    <Text
                      onPress={() => {
                        Navigation.push(this.props.componentId, {
                          component: {
                            name: 'Registration',
                          },
                        });
                      }}
                      style={{color: '#5c24fc', marginLeft: 30}}>
                      Register
                    </Text>
                  </Text>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  page_head: {
    fontSize: responsiveFontSize(4),
    textAlign: 'left',
    color: '#000',
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: '500',
  },
  actionButton: {
    width: '40%',
    height: responsiveHeight(4.5),
    borderRadius: 5,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderWidth: 1,
    borderColor: '#9e9e9e',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginTop: 10,
  },
  itemView: {
    marginBottom: '5%',
    marginLeft: 10,
    marginRight: 10,
  },
  login: {
    borderWidth: 1,
    borderColor: '#5c24fc',
  },
  loginText: {
    textAlign: 'center',
    color: '#5c24fc',
    fontSize: responsiveFontSize(2),
  },
});

function mapStateToProps({loginData}) {
  return {
    loginData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SignIn: bindActionCreators(SignIn, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
