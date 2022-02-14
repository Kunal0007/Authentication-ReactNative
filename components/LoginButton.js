import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {React, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
// import { TouchableOpacity } from 'react-native-web';

const LoginButton = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.loginbutton} onPress={props.handleLogin}>
                <Text style={styles.loginheading}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginheading: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
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
});

export default LoginButton;