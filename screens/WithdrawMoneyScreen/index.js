import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, Picker } from 'react-native';

const WithdrawScreen = () => {
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const banks = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Withdraw Money</Text>
      <Text style={styles.label}>Amount Input:</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Enter amount" keyboardType="numeric" />
      <Text style={styles.label}>Select Bank Account:</Text>
      <Picker selectedValue={selectedBank} style={styles.picker} onValueChange={itemValue => setSelectedBank(itemValue)}>
        {banks.map((bank, index) => <Picker.Item key={index} label={bank} value={bank} />)}
      </Picker>
      <Button title="Withdraw Money" onPress={() => alert('Withdrawal Successful')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10
  },
  picker: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  }
});
export default WithdrawScreen;