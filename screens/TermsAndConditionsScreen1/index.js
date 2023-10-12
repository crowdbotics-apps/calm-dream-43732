import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Mauris euismod pellentesque tellus sit amet mollis. 
  Fusce auctor, mauris in faucibus lacinia, nulla nulla adipiscing augue, 
  a egestas quam mauris ut lacus. 
  Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, 
  sed commodo augue nisi non neque.`;
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24
  }
});
export default TermsAndConditionsScreen;