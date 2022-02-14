import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const LoginOptions = () => {
  return (
    <View style={styles.loginoption}>
      <TouchableOpacity style={styles.option} >
        <Image source={{ uri: "https://img.icons8.com/color/50/000000/google-logo.png" }} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={{ uri: "https://img.icons8.com/color/50/000000/facebook-new.png" }} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/mac-os.png" }} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginoption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  option: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#EFEFEF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  }
});

export default LoginOptions;