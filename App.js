import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from './src/config/firebase';
import { signOut } from "firebase/auth";
import Login from './src/pages/Login';
import NewUser from './src/pages/NewUser';
import PageInitial from './src/pages/PageInitial';

const Stack = createStackNavigator();

export default function App() {

  function logout(){
      signOut(auth).then(() => {
          navigation.navigate("Login")
        }).catch((error) => {
          // An error happened.
        });
  }

  const onSaveClick = () => {
    signOut(auth).then(() => {
        navigation.navigate("Login")
      }).catch((error) => {
        // An error happened.
      });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='NewUser'
        component={NewUser}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='PageInitial'
        component={PageInitial}
        options={{
          title: "Portal de Notícias",
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonLogoutApp: {
    marginRight: 10,
  },
});
