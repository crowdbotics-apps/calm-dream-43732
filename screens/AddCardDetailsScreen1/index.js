import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';

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
      <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.input} />
      <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.input} />
      <TextInput placeholder="Address Line 1" value={address1} onChangeText={setAddress1} style={styles.input} />
      <TextInput placeholder="Address Line 2" value={address2} onChangeText={setAddress2} style={styles.input} />
      <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
      <TextInput placeholder="State" value={state} onChangeText={setState} style={styles.input} />
      <TextInput placeholder="Zip" value={zip} onChangeText={setZip} style={styles.input} />
      <TextInput placeholder="Country" value={country} onChangeText={setCountry} style={styles.input} />
      <TextInput placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} style={styles.input} />
      <TextInput placeholder="Card Expiration Date" value={expirationDate} onChangeText={setExpirationDate} style={styles.input} />
      <TextInput placeholder="CVV" value={cvv} onChangeText={setCvv} style={styles.input} />
      <Button title="Update" onPress={handleUpdate} />
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
  }
});
export default AddCardScreen;