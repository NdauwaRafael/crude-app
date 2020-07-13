/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:55 PM
 **/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, View, Text} from 'native-base';
import {ScrollView, Linking, BackHandler} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import SnackBar from '../../../components/MessageBar/snackBar';
import ValidationComponent from 'react-native-form-validator';

let h = responsiveHeight(100) - 300;

class Registration extends ValidationComponent {
  static options(passProps) {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false,
        backgroundColor: '#fafafa',
      },
      statusBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        style: 'dark',
      },
    };
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  onBackPress = () => {
    return true;
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View
              style={[
                {
                  paddingTop: 0,
                  backgroundColor: '#fff',
                  justifyContent: 'flex-start',
                  paddingBottom: responsiveHeight(3),
                  marginBottom: responsiveHeight(4),
                },
              ]}>
              <Text>Registration</Text>
            </View>
          </ScrollView>

          <SnackBar onRef={(ref) => (this.snackBar = ref)} />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({registrationData}) {
  return {
    registrationData,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
