import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
const dummyData = {
  user: {
    profilePicture: 'https://tinyurl.com/42evm3m3',
    crowdScore: 100,
    name: 'John Doe',
    handle: '@johndoe'
  },
  groups: [{
    id: '1',
    title: 'Group 1',
    profilePicture: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Group 2',
    profilePicture: 'https://tinyurl.com/42evm3m3'
  }],
  friends: ['Friend 1', 'Friend 2', 'Friend 3']
};

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.MvWGXvHg}>
      <View style={_styles.MMVEWqsS}>
        <TextInput placeholder="Search" style={_styles.XwegsXpN} />
        <Text>List of my conversations/friends</Text>
        <FlatList data={dummyData.friends} renderItem={({
        item
      }) => <Text>{item}</Text>} keyExtractor={item => item} />
        <Image source={{
        uri: dummyData.user.profilePicture
      }} style={_styles.XUbxmKfg} />
        <Text>Crowdscore: {dummyData.user.crowdScore}</Text>
        <Text>User name: {dummyData.user.name}</Text>
        <Text>Handle: {dummyData.user.handle}</Text>
        <Text>Groups</Text>
        <FlatList data={dummyData.groups} renderItem={({
        item
      }) => <View>
              <Image source={{
          uri: item.profilePicture
        }} style={_styles.RKirhCRa} />
              <Text>Title: {item.title}</Text>
            </View>} keyExtractor={item => item.id} />
        <Button title="Explore groups" onPress={() => console.log('To groups screen')} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  MvWGXvHg: {
    flex: 1,
    backgroundColor: "#fff"
  },
  MMVEWqsS: {
    padding: 20
  },
  XwegsXpN: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  XUbxmKfg: {
    width: 50,
    height: 50
  },
  RKirhCRa: {
    width: 50,
    height: 50
  }
});