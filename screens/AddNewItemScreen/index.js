import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleCreate = () => {// Handle create logic here
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Images/Videos</Text>
        <Text style={styles.subHeader}>Upload multiple images and videos</Text>
        <Text style={styles.subHeader}>Max 8</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} />
        <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
        <TextInput style={styles.input} placeholder="Additional details" value={additionalDetails} onChangeText={setAdditionalDetails} />
        <Button title="Create" onPress={handleCreate} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default ScreenComponent;