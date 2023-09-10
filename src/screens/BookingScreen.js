// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import COLORS from '../consts/colors';
// import { Picker } from 'react-native-picker/picker'; // Import the Picker from the correct package
// import { Provider as PaperProvider} from 'react-native-paper';


// const BookingScreen = ({ route }) => {
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [idType, setIdType] = useState('NIC');
//   const [idNumber, setIdNumber] = useState('');
//   const hotel = route.params; // Get the selected hotel from navigation route

//   // Handle the booking submission
//   const handleBooking = () => {
//     // Check if check-in and check-out dates are valid
//     if (!checkInDate || !checkOutDate) {
//       alert('Please select both check-in and check-out dates.');
//       return;
//     }

//     // Check if the check-out date is after the check-in date
//     if (checkOutDate <= checkInDate) {
//       alert('Check-out date must be after check-in date.');
//       return;
//     }

//     // Check if the user has provided a valid ID number
//     if (!idNumber) {
//       alert('Please provide a valid ID number.');
//       return;
//     }

//     // Now, you can proceed with the booking process
//     // You can make an API call to a server to process the booking
//     // or save the booking data locally, depending on your application's architecture

//     // For demonstration purposes, we'll simulate a successful booking:
//     const bookingData = {
//       hotelName: hotel.name,
//       price: hotel.price, // Include the hotel price
//       checkInDate,
//       checkOutDate,
//       idType,
//       idNumber,
//     };

//     // You can replace this alert with your actual booking logic.
//     alert('Booking Successful!\n' + JSON.stringify(bookingData, null, 2));
//   };

//   return (
//     <PaperProvider> {/* Wrap your component in PaperProvider */}
//       <View style={styles.container}>
//         <Text style={styles.title}>Book Hotel</Text>
//         <Text style={styles.hotelName}>{hotel.name}</Text>
//         <Text style={styles.label}>Price per Night: ${hotel.price}</Text>
//         <Text style={styles.label}>Check-in Date:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter check-in date"
//           value={checkInDate}
//           onChangeText={(text) => setCheckInDate(text)}
//         />
//         <Text style={styles.label}>Check-out Date:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter check-out date"
//           value={checkOutDate}
//           onChangeText={(text) => setCheckOutDate(text)}
//         />
//         <Text style={styles.label}>Select ID Type:</Text>
//         <Picker
//           selectedValue={idType}
//           onValueChange={(itemValue) => setIdType(itemValue)}
//         >
//           <Picker.Item label="NIC" value="NIC" />
//           <Picker.Item label="Passport" value="Passport" />
//         </Picker>
//         <Text style={styles.label}>ID Number:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter ID number"
//           value={idNumber}
//           onChangeText={(text) => setIdNumber(text)}
//         />
//         <Button title="Book Now" onPress={handleBooking} />
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: COLORS.white,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   hotelName: {
//     fontSize: 20,
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: COLORS.grey,
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//   },
//   picker: {
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: COLORS.grey,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
// });

// export default BookingScreen;
