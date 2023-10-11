import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const AddCardScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleUpdate = () => {// Handle update card details
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirstName} value={firstName} />
      <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLastName} value={lastName} />
      <TextInput style={styles.input} placeholder="Address Line 1" onChangeText={setAddress1} value={address1} />
      <TextInput style={styles.input} placeholder="Address Line 2" onChangeText={setAddress2} value={address2} />
      <TextInput style={styles.input} placeholder="City" onChangeText={setCity} value={city} />
      <TextInput style={styles.input} placeholder="State" onChangeText={setState} value={state} />
      <TextInput style={styles.input} placeholder="Zip" onChangeText={setZip} value={zip} />
      <TextInput style={styles.input} placeholder="Country" onChangeText={setCountry} value={country} />
      <TextInput style={styles.input} placeholder="Card Number" onChangeText={setCardNumber} value={cardNumber} />
      <TextInput style={styles.input} placeholder="Card Expiration Date" onChangeText={setExpirationDate} value={expirationDate} />
      <TextInput style={styles.input} placeholder="CVV" onChangeText={setCvv} value={cvv} secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={handleUpdate} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default AddCardScreen;