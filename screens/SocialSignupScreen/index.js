import React from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Handle-ID" />
      <TextInput style={styles.input} placeholder="Address" />
      <Button title="Sign Up" color="#841584" />
      <Text style={styles.orText}>OR</Text>
      <Text style={styles.socialText}>Signup using</Text>
      <Button title="Google" color="#4285F4" />
      <Button title="Apple" color="#000000" />
      <Button title="Facebook" color="#3b5998" />
      <Text style={styles.orText}>OR</Text>
      <Button title="Already have an account? Login" color="#841584" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16
  },
  socialText: {
    textAlign: 'center',
    marginBottom: 16
  }
});
export default App;