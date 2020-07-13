/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 6:05 PM
 **/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Icon, Button} from 'native-base';
import {Navigation} from 'react-native-navigation';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {getInitial} from '../../components/Navigation/partials/functions';

class Home extends Component {
  static options(passProps) {
    return {
      statusBar: {
        backgroundColor: '#ea178d',
        style: 'dark',
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      upcomingMaturities: false,
      activeSlide: 0,
      notifications: false,
    };
  }

  componentDidMount() {
    global.currentScreen = 'HomeScreen';

    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  componentDidAppear() {
    this.setState({
      activeSlide: 0,
    });
  }

  componentDidDisappear() {
    this.setState({
      activeSlide: 0,
    });
  }

  updateIndex(index) {
    this.setState({
      activeSlide: index,
    });
  }

  openDrawer() {
    Navigation.showDrawer({
      component: {
        name: 'navigation.Drawer',
        passProps: {
          animationOpenTime: 300,
          animationCloseTime: 300,
          direction: 'left',
          dismissWhenTouchOutside: true,
          fadeOpacity: 0.6,
          drawerScreenWidth: 0.9,
          drawerScreenHeight: 1,
          parentComponentId: this.props.componentId,
        },
      },
    });
  }

  UserInformation() {}

  render() {
    const {user} = this.props;
    let firstName = user.name
      ? user.name.split(' ').slice(0, -1).join(' ')
      : '';
    return (
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 2}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              colors={['#ea178d']}
              onRefresh={() => this.UserInformation(true)}
            />
          }>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View
              style={{
                flex: 1,
                minHeight: '35%',
              }}>
              <View style={styles.salutation}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: '5%',
                    maxHeight: '35%',
                  }}>
                  <View>
                    <Button transparent onPress={() => this.openDrawer()}>
                      <Icon
                        style={styles.iconStyle}
                        type="SimpleLineIcons"
                        name="menu"
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      transparent
                      iconLeft
                      onPress={() =>
                        Navigation.push(this.props.componentId, {
                          component: {name: 'Notifications'},
                        })
                      }>
                      <View style={styles.homepageIconContainer}>
                        {this.state.notifications ? (
                          <Text style={styles.homepageBadge} />
                        ) : null}
                        <Icon
                          style={styles.iconStyle}
                          type="EvilIcons"
                          name="bell"
                        />
                      </View>
                    </Button>
                  </View>
                </View>

                <View style={{minHeight: '70%'}}>
                  <View style={styles.salutationContent}>
                    <View style={styles.avatarContainer}>
                      <Text style={styles.userTitleAvatar}>
                        {getInitial(firstName)}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: responsiveFontSize(3.5),
                          fontWeight: '600',
                          textAlign: 'left',
                          alignSelf: 'stretch',
                          paddingBottom: 3,
                          color: '#fff',
                        }}>
                        Hello {firstName},
                      </Text>
                      <Text style={{color: '#fff'}} note>
                        Welcome back
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
  },

  salutation: {
    minHeight: '35%',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '5%',
  },

  salutationContent: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
    paddingBottom: '5%',
    marginBottom: '5%',
    justifyContent: 'flex-start',
  },

  avatarContainer: {
    paddingTop: responsiveFontSize(0.5),
    paddingBottom: responsiveFontSize(0.5),
    paddingRight: responsiveFontSize(1),
    paddingLeft: responsiveFontSize(1),
    borderWidth: 0,
    backgroundColor: '#eee',
    borderRadius: 50,
    borderColor: '#eee',
    width: 50,
    maxHeight: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userTitleAvatar: {
    color: 'orange',
    fontSize: responsiveFontSize(4),
    fontWeight: '600',
  },

  carousel: {},

  homepageIconContainer: {
    position: 'relative',
    padding: 0,
  },

  homepageBadge: {
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: -1,
    right: 10,
    padding: 1,
    height: 10,
    width: 10,
    backgroundColor: '#f5b830',
    borderRadius: 5,
    fontSize: 10,
    ...Platform.select({
      ios: {
        overflow: 'hidden',
      },
    }),
  },
});

function mapStateToProps({loginData: {token, user}}) {
  return {
    token,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
