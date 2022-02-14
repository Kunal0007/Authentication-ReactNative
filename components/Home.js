import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Home = ({ navigation }) => {

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.replace('Login');
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.home}>
      <Text>Hello !!!! {auth.currentUser?.email} </Text>
      <TouchableOpacity style={styles.loginbutton} onPress={handleSignOut}>
        <Text style={styles.loginheading}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbutton: {
    width: '100%',
    height: 60,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06f',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
})

export default Home