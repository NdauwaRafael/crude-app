/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:51 PM
 **/
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Spinner} from 'native-base';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
function UiButton({customStyle, onPress, textStyle, label, loading, disable}) {
  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles.button, customStyle, {opacity: disable ? 0.5 : 1}]}
      onPress={() => onPress()}>
      <Text
        style={[textStyle, {marginRight: 10, fontSize: responsiveFontSize(2)}]}>
        {label}
      </Text>
      {loading ? <Spinner size="small" /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    elevation: 0,
    padding: responsiveFontSize(1.6),
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 5,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 50,
  },
});

export default UiButton;
