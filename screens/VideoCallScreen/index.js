import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CallScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.callingTo}>Calling to Username</Text>
      <View style={styles.videoContainer}>
        <Image style={styles.video} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.video} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Text>Mute/Unmute</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text>End</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text>Switch Camera</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.endButton}>
        <Text style={styles.endButtonText}>End</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  callingTo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  videoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  video: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  icon: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50
  },
  endButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10
  },
  endButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default CallScreen;