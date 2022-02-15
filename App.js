import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: { backgroundColor: 'white' },
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <KeyboardAwareScrollView style={{ flex: 1 }}>
    //     <View style={styles.container}>
    //       <Login />
    //       <StatusBar style="auto" />
    //     </View>
    //   </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },

});

export default App;