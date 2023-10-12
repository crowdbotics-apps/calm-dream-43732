import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {// Handle submit logic here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Subject</Text>
        <TextInput style={styles.input} onChangeText={setSubject} value={subject} placeholder="Enter subject" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Message</Text>
        <TextInput style={styles.input} onChangeText={setMessage} value={message} placeholder="Enter message" multiline />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Back" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff'
  }
});
export default FeedbackScreen;