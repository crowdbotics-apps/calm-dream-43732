import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Image, StyleSheet } from 'react-native';

const EventScreen = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [ticketInfo, setTicketInfo] = useState('');
  const [description, setDescription] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Event Name" value={eventName} onChangeText={setEventName} />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Time" value={time} onChangeText={setTime} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput style={styles.input} placeholder="Ticketing Information" value={ticketInfo} onChangeText={setTicketInfo} />
      <TextInput style={styles.input} placeholder="A brief description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Additional details" value={additionalDetails} onChangeText={setAdditionalDetails} />
      <Button title="Create" onPress={() => {}} />
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
    marginBottom: 10,
    paddingLeft: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  }
});
export default EventScreen;