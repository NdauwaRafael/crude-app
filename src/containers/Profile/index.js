/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 11:21 PM
 **/

import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, ListItem, Body, Right, Icon} from 'native-base';
import {connect} from 'react-redux';
import SnackBar from '../../components/MessageBar/snackBar';

class Profile extends Component {
  render() {
    const {user} = this.props;

    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, color: '#3f4441', textAlign: 'center'}}>
          Profile
        </Text>
        <SnackBar onRef={(ref) => (this.snackBar = ref)} />

        <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 40, paddingHorizontal: 20}}>
          <List>
            <ListItem style={{marginLeft: 10, marginRight: 10}}>
              <Body>
                <Text style={{fontSize: 20, color: '#5c24fc'}}>
                  {user.name}
                </Text>
              </Body>
              <Right>
                <Icon name="person" style={{color: '#ec148c'}} />
              </Right>
            </ListItem>

            <ListItem style={{marginLeft: 10, marginRight: 10}}>
              <Body>
                <Text style={{fontSize: 20, color: '#5c24fc'}}>
                  {user.pantone_value}
                </Text>
              </Body>
              <Right>
                <Icon name="mail" style={{color: '#ec148c'}} />
              </Right>
            </ListItem>

            <ListItem style={{marginLeft: 10, marginRight: 10}}>
              <Body>
                <Text style={{fontSize: 20, color: '#5c24fc'}}>
                  {user.year}
                </Text>
              </Body>
              <Right>
                <Icon name="calendar" style={{color: '#ec148c'}} />
              </Right>
            </ListItem>
          </List>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
