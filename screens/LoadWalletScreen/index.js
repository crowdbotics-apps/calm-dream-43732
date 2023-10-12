import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const WalletScreen = () => {
  const [amount, setAmount] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Current balance in the wallet</Text>
        <Text style={styles.balanceAmount}>$1000</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Amount Input:</Text>
        <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Enter amount" keyboardType="numeric" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add Money" onPress={() => console.log('Add Money')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  balanceContainer: {
    marginBottom: 20
  },
  balanceText: {
    fontSize: 16,
    color: '#333'
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  inputContainer: {
    marginBottom: 20
  },
  inputLabel: {
    fontSize: 16,
    color: '#333'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  },
  buttonContainer: {
    marginBottom: 20
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  }
});
export default WalletScreen;