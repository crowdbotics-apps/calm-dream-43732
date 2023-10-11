import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, Image } from 'react-native';

const LoginScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" />
      <Text style={styles.orText}>OR</Text>
      <Button title="Login with Google" />
      <Button title="Login with Facebook" />
      <Button title="Login with Apple" />
      <Button title="Forgot Password?" />
    </SafeAreaView>;
};

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" />
      <Text style={styles.orText}>OR</Text>
      <Button title="Sign Up with Google" />
      <Button title="Sign Up with Facebook" />
      <Button title="Sign Up with Apple" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10
  },
  orText: {
    marginVertical: 10,
    fontSize: 16
  }
});
export { LoginScreen, SignUpScreen };