/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 8:12 PM
 **/
import {StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const loginStyles = StyleSheet.create({
  loginInput: {
    fontSize: 16,
  },
  itemView: {
    marginBottom: '5%',
    marginLeft: 10,
    marginRight: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#4788bb',
    fontSize: 14,
  },
  loginInputFocused: {
    borderColor: '#5c24fc',
  },
  bigTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
    lineHeight: 35,
  },
  description: {
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: responsiveFontSize(2),
    fontWeight: '300',
    lineHeight: 35,
  },
});

export default loginStyles;
