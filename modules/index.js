import React from 'react';
import { SafeAreaView, StyleSheet, View, Button, ScrollView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <Button title="My profile" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="My wallet Screen" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="My friends" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Bookmark" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Groups" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Events" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="My wallet" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Manage my events" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Business Pages" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Marketplace" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Ads" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Video call History" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Payment history Screen" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Settings" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Terms and conditions" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Privacy policy" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Log out" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 10
  }
});
export default ScreenComponent;