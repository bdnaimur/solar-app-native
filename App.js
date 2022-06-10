
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';
import { StatusBar } from 'expo-status-bar';
import GlobalStyles from './GlobalStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Test from './src/screens/test';
import { FontAwesome } from '@expo/vector-icons';
import HomeStack from './src/screens/HomeStack';
const Tab = createBottomTabNavigator();
export default function App() {

  const [loaded] = useFonts({
    SpartanRegular: require('./assets/fonts/Spartan-regular.ttf'),
    SpartanBold: require('./assets/fonts/Spartan-bold.ttf'),
    AntanioMedium: require('./assets/fonts/Antonio-medium.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        {/* <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer> */}

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={ {headerShown: false, tabBarStyle: {backgroundColor: 'transparent'}, tabBarShowLabel : false,}} 
          >
            <Tab.Screen name="Home" component={HomeStack} options={
            ({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                
                return <FontAwesome name="home" size={24} color="pink" />
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              
              
            })}/>
            <Tab.Screen name="Setting" component={Test} />
            {/* <Stack.Screen name="Details" component={Details} /> */}

          </Tab.Navigator>
          <StatusBar barStyle="light-content" backgroundColor="#fff" />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black
  },
});
