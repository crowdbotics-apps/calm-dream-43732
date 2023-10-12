import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    title: 'Dummy Title',
    price: '$100',
    description: 'This is a dummy description',
    timestamp: 'Just now',
    postedBy: 'Dummy User',
    userProfilePic: 'https://tinyurl.com/42evm3m3',
    crowdScore: '4.5',
    userName: 'Dummy User',
    handle: '@dummyuser',
    award: 'Dummy Award'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{
        uri: dummyData.userProfilePic
      }} />
        <Text style={styles.title}>{dummyData.title}</Text>
        <Text style={styles.price}>{dummyData.price}</Text>
        <Text style={styles.description}>{dummyData.description}</Text>
        <Text style={styles.timestamp}>{dummyData.timestamp}</Text>
        <Text style={styles.postedBy}>Posted by: {dummyData.postedBy}</Text>
        <Text style={styles.crowdScore}>Crowdscore: {dummyData.crowdScore}</Text>
        <Text style={styles.userName}>User Name: {dummyData.userName}</Text>
        <Text style={styles.handle}>Handle: {dummyData.handle}</Text>
        <Text style={styles.award}>Award: {dummyData.award}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Chat" onPress={() => {}} />
          <Button title="Send Friend Request" onPress={() => {}} />
          <Button title="Report" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  timestamp: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10
  },
  postedBy: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  crowdScore: {
    fontSize: 16,
    color: 'orange',
    marginBottom: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  handle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  },
  award: {
    fontSize: 16,
    color: 'gold',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ScreenComponent;