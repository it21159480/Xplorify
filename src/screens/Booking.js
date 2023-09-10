import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Booking = ({ route }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [isIdValid, setIsIdValid] = useState(true);
  const [isCheckInValid, setIsCheckInValid] = useState(true);
  const [isCheckOutValid, setIsCheckOutValid] = useState(true);

  const hotel = route.params.hotel;

  const handleBooking = () => {
    if (!isCheckInValid || !isCheckOutValid || !isIdValid) {
      alert('Please provide valid dates and ID number.');
      return;
    }
    if (!checkInDate || !checkOutDate || !idNumber) {
        alert('Please fill in all required fields.');
        return;
      }
      
    const bookingDetails = {
      hotelName: hotel.name,
      price: hotel.price,
      checkInDate,
      checkOutDate,
      idNumber,
    };

    alert(JSON.stringify(bookingDetails, null, 2));
  };

  const validateIdNumber = (id) => {
    const idRegex = /^[0-9]{9}[vVxX]$/; 
    return idRegex.test(id);
  };

  const validateDateFormat = (date) => {
    const dateFormatRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateFormatRegex.test(date);
  };

  const handleIdNumberChange = (text) => {
    setIdNumber(text);
    setIsIdValid(validateIdNumber(text));
  };

  const handleCheckInChange = (text) => {
    setCheckInDate(text);
    setIsCheckInValid(validateDateFormat(text));
  };

  const handleCheckOutChange = (text) => {
    setCheckOutDate(text);
    setIsCheckOutValid(validateDateFormat(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking Details</Text>
      <Text style={styles.hotelDetails}>Hotel Name: {hotel.name}</Text>
      <Text style={styles.hotelDetails}>Price: ${hotel.price}</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: isCheckInValid ? 'gray' : 'red' },
        ]}
        placeholder="Check-In Date (DD/MM/YYYY)"
        value={checkInDate}
        onChangeText={handleCheckInChange}
      />
      {!isCheckInValid && (
        <Text style={styles.errorText}>Invalid date format. Use DD/MM/YYYY.</Text>
      )}
      <TextInput
        style={[
          styles.input,
          { borderColor: isCheckOutValid ? 'gray' : 'red' },
        ]}
        placeholder="Check-Out Date (DD/MM/YYYY)"
        value={checkOutDate}
        onChangeText={handleCheckOutChange}
      />
      {!isCheckOutValid && (
        <Text style={styles.errorText}>Invalid date format. Use DD/MM/YYYY.</Text>
      )}
      <TextInput
        style={[
          styles.input,
          { borderColor: isIdValid ? 'gray' : 'red' },
        ]}
        placeholder="ID Number (e.g., 123456789V)"
        value={idNumber}
        onChangeText={handleIdNumberChange}
      />
      {!isIdValid && (
        <Text style={styles.errorText}>Please enter a valid ID number.</Text>
      )}
      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop10: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  hotelDetails: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default Booking;
