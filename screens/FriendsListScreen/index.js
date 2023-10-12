import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  handle: '@johndoe',
  score: 85,
  award: 'Gold'
}, {
  id: '2',
  name: 'Jane Doe',
  handle: '@janedoe',
  score: 90,
  award: 'Platinum'
} // Add more dummy data here
];

const FriendItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Image style={styles.profilePic} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.handle}>{item.handle}</Text>
      <Text style={styles.score}>Crowdscore: {item.score}</Text>
      <Text style={styles.award}>Award: {item.award}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Chat" onPress={() => {}} />
      <Button title="Unfriend" onPress={() => {}} />
    </View>
  </View>;

const FriendsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search friends..." />
      <FlatList data={dummyData} renderItem={FriendItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  handle: {
    color: 'gray'
  },
  score: {
    marginTop: 5
  },
  award: {
    marginTop: 5
  },
  buttonContainer: {
    justifyContent: 'space-between'
  }
});
export default FriendsScreen;