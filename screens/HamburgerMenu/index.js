import React from 'react';
import { SafeAreaView, StyleSheet, View, Button, Image } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.buttonContainer}>
        <Button title="My profile" onPress={() => {}} />
        <Button title="My wallet Screen" onPress={() => {}} />
        <Button title="My friends" onPress={() => {}} />
        <Button title="Bookmark" onPress={() => {}} />
        <Button title="Groups" onPress={() => {}} />
        <Button title="Events" onPress={() => {}} />
        <Button title="Manage my events" onPress={() => {}} />
        <Button title="Business Pages" onPress={() => {}} />
        <Button title="Marketplace" onPress={() => {}} />
        <Button title="Ads" onPress={() => {}} />
        <Button title="Video call History" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
        <Button title="Terms and conditions" onPress={() => {}} />
        <Button title="Privacy policy" onPress={() => {}} />
        <Button title="Log out" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  buttonContainer: {
    width: '80%'
  }
});
export default ScreenComponent;