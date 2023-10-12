import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Switch, Image, StyleSheet, Alert } from 'react-native';

const ManageSubscriptionScreen = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isPushEnabled, setPushEnabled] = useState(false);
  const [isEmailEnabled, setEmailEnabled] = useState(false);
  const [isSMSEnabled, setSMSEnabled] = useState(false);

  const toggleSwitch = setFunction => {
    setFunction(previousState => !previousState);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [{
      text: 'Cancel',
      style: 'cancel'
    }, {
      text: 'OK',
      onPress: () => console.log('OK Pressed')
    }]);
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Current subscription details</Text>
      <Button title="Unsubscribe" onPress={() => {}} />
      <Button title="Subscribe" onPress={() => {}} />
      <View style={styles.switchContainer}>
        <Text>Notifications</Text>
        <Switch onValueChange={() => toggleSwitch(setNotificationsEnabled)} value={isNotificationsEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Push notification</Text>
        <Switch onValueChange={() => toggleSwitch(setPushEnabled)} value={isPushEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Email notifications</Text>
        <Switch onValueChange={() => toggleSwitch(setEmailEnabled)} value={isEmailEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>SMS notifications</Text>
        <Switch onValueChange={() => toggleSwitch(setSMSEnabled)} value={isSMSEnabled} />
      </View>
      <Button title="My bank accounts" onPress={() => {}} />
      <Button title="Privacy policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} />
      <Button title="Support/ Send Feedback" onPress={() => {}} />
      <Button title="Delete account" onPress={() => {}} />
      <Button title="Log out" onPress={handleLogout} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  }
});
export default ManageSubscriptionScreen;