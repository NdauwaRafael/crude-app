/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 6:05 PM
 **/
import React, {Component} from 'react';
import {Container, Content, Text, View} from 'native-base';
import {ScrollView} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import SnackBar from '../../components/MessageBar/snackBar';
import {connect} from 'react-redux';

class Home extends Component {
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
              <Text>HOME</Text>
            </View>
          </ScrollView>

          <SnackBar onRef={(ref) => (this.snackBar = ref)} />
        </Content>
      </Container>
    );
  }
}
function mapStateToProps({registrationData}) {
  return {};
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
