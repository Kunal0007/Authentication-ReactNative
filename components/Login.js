import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';
import { useState, React, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Icons from "react-native-heroicons/solid";
import LoginButton from './LoginButton';
import LoginOptions from './LoginOptions';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.navigate('Home');
            }
        })
        return unsubcribe;
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.login}>
                    <Image style={styles.image} source={require('../assets/undraw_Ask_me_anything_re_x7pm-removebg-preview.png')} />
                    <Text style={styles.loginheading}>Login</Text>
                    <View style={styles.logininput}>
                        <Icons.AtSymbolIcon color={'#C7C7CD'} />
                        <TextInput
                            placeholder={`Email ID`}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={styles.logininput}>
                        <Icons.LockClosedIcon color={'#C7C7CD'} />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={pass => setPassword(pass)}
                        />
                    </View>
                    <LoginButton handleLogin={handleLogin} />
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: '#C7C7CD', margin: 20 }}>Or, login with...</Text>
                    </View>
                    <LoginOptions/>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: '#C7C7CD', margin: 20 }} onPress={() => navigation.navigate('SignUp')}>New to App? SignUp</Text>
                    </View>
                </View>
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    login: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    loginheading: {
        paddingTop: 10,
        fontSize: 27,
        color: '#21325E',
        // fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    logininput: {
        flex: 1,
        marginTop: 15,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1.5,
        borderColor: 'white',
        borderBottomColor: '#EFEFEF',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default Login;
