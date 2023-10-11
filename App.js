import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import FoodDetails from './src/screens/FoodDetails';
import BookingScreen from './src/screens/FoodBooking.js';
import FoodHome from './src/screens/FoodHome.js'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FoodHome" component={FoodHome} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//  and upon confirming the form i need you to give me the codes to generate a report which will include all the booking details and 