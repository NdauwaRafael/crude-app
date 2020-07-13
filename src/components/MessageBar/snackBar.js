/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 5:04 PM
 **/
import React, {Component} from 'react';

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import SnackBar from 'react-native-snackbar-component';
import {EventRegister} from 'react-native-event-listeners';

class SnackBarAlerts extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      showSnackBar: false,
      message: null,
      timeout: 5000,
      componentKey: '',
    };
  }

  componentDidUpdate(prevProps) {
    const {componentKey} = this.props;
    if (prevProps.componentKey !== componentKey) {
      this.setState({
        componentKey,
      });
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.onRef(this);

    let vm = this;

    this.listener = EventRegister.addEventListener(
      'showToastMessage',
      (data) => {
        vm.showSnackBar(data.show, data.message, data.timeout);
      },
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.props.onRef(undefined);
  }

  showSnackBar(show, message, timeout) {
    if (this._isMounted) {
      if (this.state.showSnackBar) {
        this.setState({showSnackBar: false});
      }

      this.setState({showSnackBar: show});

      this.setState({message: message});

      this.setState({timeout: timeout});

      if (timeout != 0 && timeout != undefined) {
        this.setTimeout(() => {
          this.setState({showSnackBar: false});
        }, this.state.timeout);
      }
    }
  }

  render() {
    const {componentKey} = this.props;
    return (
      <SnackBar
        key={componentKey}
        style={{position: 'absolute'}}
        testID="snackAlert"
        visible={this.state.showSnackBar}
        textMessage={this.state.message}
        actionHandler={() => {
          console.warn('snackbar button clicked!');
        }}
      />
    );
  }
}

reactMixin(SnackBarAlerts.prototype, TimerMixin);

export default SnackBarAlerts;
