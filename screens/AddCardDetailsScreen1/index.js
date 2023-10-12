import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const AddCardScreen = () => {
  return <SafeAreaView style={styles.container}>
      <TextInput placeholder="First Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Address Line 1" style={styles.input} />
      <TextInput placeholder="Address Line 2" style={styles.input} />
      <TextInput placeholder="City" style={styles.input} />
      <TextInput placeholder="State" style={styles.input} />
      <TextInput placeholder="Zip" style={styles.input} />
      <TextInput placeholder="Country" style={styles.input} />
      <TextInput placeholder="Card Number" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Card Expiration Date" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="CVV" style={styles.input} keyboardType="numeric" />
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={() => {}} />
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
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5
  },
  buttonContainer: {
    marginTop: 30
  }
});
export default AddCardScreen;