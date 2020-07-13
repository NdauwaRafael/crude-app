/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:36 PM
 **/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuContent from './partials/MenuContent';
import {bindActionCreators} from 'redux';
import {Logout} from '../../Redux/actions/auth/login';
import {Navigation} from 'react-native-navigation';
import {getInitial} from './partials/functions';
import {RNNDrawer} from 'react-native-navigation-drawer-extension';

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.goToMenu = this.goToMenu.bind(this);
  }

  logout() {
    this.props.logout();
    RNNDrawer.dismissDrawer();
  }

  goToMenu(name) {
    RNNDrawer.dismissDrawer();
    Navigation.push(this.props.parentComponentId, {
      component: {
        name,
        passProps: {
          notTab: true,
        },
      },
    });
  }

  render() {
    const {user} = this.props;
    return (
      <MenuContent
        user={user}
        initial={getInitial(user.name)}
        logout={this.logout}
        goToMenu={this.goToMenu}
        dismiss={() => {
          Navigation.dismissDrawer();
        }}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
