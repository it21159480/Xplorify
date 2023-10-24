import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import FoodDetails from './src/screens/FoodDetails';
import BookingScreen from './src/screens/FoodBooking.js';
import FoodHome from './src/screens/FoodHome.js'
import WelcomeScreen from './src/screens/WelcomeScreen';
import OrederedPage from './src/screens/OrderedPage';
import UpdateOrder from './src/screens/UpdateOrder';
import UserMap from './src/screens/UserMap';
import DashBoard from './src/screens/csse/DashBoard';
import RequestForQuotation from './src/screens/csse/RequestForQuotation'
import InvitationForBidPage from './src/screens/csse/InvitationForBidPage';
import ContractPage from './src/screens/csse/ContractPage';
import InquiryPage from './src/screens/csse/InquiryPage';
import DownloadComponent from './src/screens/csse/DownloadComponent';
import ContractDetailsPage from './src/screens/csse/ContractDetailsPage';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"  />
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='DashBorad'>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name="FoodHome" component={FoodHome} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name='OrderedPage'component={OrederedPage} />
        <Stack.Screen name='UpdateOrder' component={UpdateOrder}/>
        <Stack.Screen name='UserMap' component={UserMap}/>
        <Stack.Screen name='DashBorad' component={DashBoard} />
        <Stack.Screen name='RequestForQuotation' component={RequestForQuotation} />
        <Stack.Screen name='InvitationForBidPage' component={InvitationForBidPage} />
        <Stack.Screen name='ContractPage' component={ContractPage} />
        <Stack.Screen name='InquiryPage'  component={InquiryPage}/>
        <Stack.Screen name='DownloadComponent' component={DownloadComponent} />
        <Stack.Screen name='ContractDetailsPage' component={ContractDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//  and upon confirming the form i need you to give me the codes to generate a report which will include all the booking details and 