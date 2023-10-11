import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </TouchableOpacity>
      <Button title="Login" />
      <Text style={styles.or}>OR</Text>
      <Text style={styles.loginUsing}>Login using</Text>
      <View style={styles.socialButtons}>
        <Button title="Google" />
        <Button title="Facebook" />
        <Button title="Apple" />
      </View>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity>
        <Text style={styles.signup}>Don't have an account? Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#007BFF'
  },
  or: {
    marginVertical: 20,
    color: '#000'
  },
  loginUsing: {
    marginBottom: 10,
    color: '#000'
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  signup: {
    color: '#007BFF'
  }
});
export default LoginScreen;