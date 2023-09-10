import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Home.js';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/screens/HotelDetails.js';
import BookingScreen from './src/screens/Booking.js';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//  and upon confirming the form i need you to give me the codes to generate a report which will include all the booking details and 