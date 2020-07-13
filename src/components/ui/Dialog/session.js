/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:43 PM
 **/

import React, {Component} from 'react';
import PopupDialog, {
  DialogContent,
  SlideAnimation,
} from 'react-native-popup-dialog';
import {Button, Icon, Text, View} from 'native-base';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {EventRegister} from 'react-native-event-listeners';
import {Logout} from '../../../Redux/actions/auth/login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navigation} from 'react-native-navigation';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dismiss = this.dismiss.bind(this);
  }

  dismiss = () => {
    Navigation.dismissAllModals();
    this.props.logout();
    EventRegister.emit('resetTimer', true);
  };

  render() {
    return (
      <PopupDialog
        visible={this.props.show}
        dialogAnimation={slideAnimation}
        width={0.95}
        height={null}
        containerStyle={{zIndex: 10, elevation: 10}}
        dismissOnTouchOutside={false}
        overlayOpacity={0.3}
        overlayBackgroundColor={'#000'}
        dialogStyle={{
          padding: 0,
          margin: 0,
        }}>
        <DialogContent
          style={{
            backgroundColor: '#ffffff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#5c24fc',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              marginLeft: '-6%',
              marginRight: '-6%',
              padding: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <View style={{width: '85%'}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: responsiveFontSize(2.4),
                    fontWeight: '400',
                  }}>
                  Session time-out
                </Text>
              </View>

              <View style={{width: '15%'}}>
                <Button
                  iconLeft
                  transparent
                  primary
                  onPress={() => this.dismiss()}>
                  <Icon
                    name="close"
                    type="EvilIcons"
                    style={{
                      color: '#ffffff',
                      fontSize: responsiveFontSize(4),
                    }}
                  />
                </Button>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              paddingVertical: '5%',
              minHeight: 150,
            }}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{color: '#3f4441', fontSize: 14}}>
                You have been logged out due to inactivity. You will have to
                login again
              </Text>

              <Button
                disabled={this.state.isLoading}
                style={[{marginTop: 10}]}
                block
                success
                onPress={() => {
                  this.dismiss();
                }}>
                <Text uppercase={false}>Ok</Text>
              </Button>
            </View>
          </View>
        </DialogContent>
      </PopupDialog>
    );
  }
}

function mapStateToProps({loginData: {user}}) {
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(Logout, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);
