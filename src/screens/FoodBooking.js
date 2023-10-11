import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { shareAsync } from 'expo-sharing';
import * as Print from 'expo-print';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
// import Button from 'react-native-element'

const Booking = ({ navigation, route }) => {

  const [idNumber, setIdNumber] = useState(1);
  const [total, setTotal] = useState();
  const food = route.params.food;
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };
  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
    Food Order Details <span style="color:red;">ID : 012231</span>
    </h1>
    

    <table>
      <tr>
        <th>Food Name</th>
        <th>Quantity</th>
        <th>Per Price</th>
        <th>Total Price</th>
      </tr>
      <tr>
        <td>${food.name}</td>
        <td>${idNumber}</td>
        <td>${food.price}</td>
        <td>${total}</td>
      </tr>
      
      <!-- Add more rows here for additional items -->
    </table>
   
   
  </body>
</html>`;




  const handleClose = () => {
    navigation.navigate('FoodHome');
    setModalVisible(!isModalVisible);
  };
  const increase = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };
 

  useEffect(() => {
    if (food.price && quantity) {
      const newTotal = parseFloat(food.price) * parseInt(quantity); // Convert to numbers
      setTotal(newTotal);
    }
    // else { setTotal(food.price) }
  }, [food.price, quantity]);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Details</Text>
      {/* <Image source={food.image} style={styles.topFoodCardImage}/> */}
      <Text style={styles.foodDetails}>Food Name: {food.name}</Text>
      <Text style={styles.foodDetails}>Price: {total}</Text>
      <TextInput
        style={[styles.input,]}
        placeholder=" Enter Quantity"
        value={idNumber}
        onChangeText={(value) => setIdNumber(value)}
        keyboardType={'numeric'}
      />
      <View style={{flexDirection:'row', justifyContent:'space-between'}} >
        <Text style={{fontSize:25, fontWeight:'bold'}}>Quantity</Text>
        <View style={styles.quantity} >
          <Icon name="pluscircle" size={40} color="black" onPress={increase} />
          <Text style={{paddingLeft:10, paddingRight:15, fontSize:25}} >{quantity}</Text>
          <Icon name="minuscircle" size={40} color="black"  onPress={decrease}/>
        </View>

      </View>


      <Button title="Order Now" onPress={() => setModalVisible(!isModalVisible)} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
            <Icon name="checkcircle" color='green' size={28} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', paddingLeft: 10, paddingTop: 5 }}>Successfull</Text>
          </View>
          <Text style={styles.modalText}>Total Amount:{total}</Text>
          <Text style={styles.modalText}>Food Name: {food.name}</Text>
          <Text style={styles.modalText}>Quantity: {idNumber}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
            <Button title='close' onPress={handleClose} color={'red'} />
            <Button title='print' onPress={print} color={'black'} />
            <Button title='share' onPress={printToFile} /></View>

        </View>
      </Modal>
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
  foodDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  topFoodCardImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  quantity:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
  },
});

export default Booking;
