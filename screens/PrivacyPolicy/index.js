import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, nec ultrices
          arcu consequat. Morbi non pellentesque magna. Donec iaculis gravida
          nulla, a lobortis nisl vestibulum vel. Phasellus et magna nulla.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, nec ultrices
          arcu consequat. Morbi non pellentesque magna. Donec iaculis gravida
          nulla, a lobortis nisl vestibulum vel. Phasellus et magna nulla.
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16
  }
});
export default PrivacyPolicyScreen;