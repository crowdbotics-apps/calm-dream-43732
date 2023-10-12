import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList } from 'react-native';

const ProfileScreen = () => {
  const dummyData = {
    profilePicture: 'https://tinyurl.com/42evm3m3',
    crowdScore: 100,
    award: 'Top Contributor',
    bio: 'This is a sample bio',
    friends: 200,
    posts: [{
      id: '1',
      title: 'Post 1',
      details: 'Details of Post 1'
    }, {
      id: '2',
      title: 'Post 2',
      details: 'Details of Post 2'
    }, {
      id: '3',
      title: 'Post 3',
      details: 'Details of Post 3'
    }]
  };

  const renderItem = ({
    item
  }) => <View>
      <Text>{item.title}</Text>
      <Text>{item.details}</Text>
      <Button title="Remove" onPress={() => {}} />
      <Button title="Hide" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={_styles.kfMGDtnI}>
      <Image source={{
      uri: dummyData.profilePicture
    }} style={_styles.mdRHsjKV} />
      <Button title="Change profile picture" onPress={() => {}} />
      <Text>Crowdscore: {dummyData.crowdScore}</Text>
      <Text>Award: {dummyData.award}</Text>
      <TextInput value={dummyData.bio} style={_styles.NdlUhTde} />
      <Text>Number of friends: {dummyData.friends}</Text>
      <Button title="Go to Friends screen" onPress={() => {}} />
      <Text>Number of posts: {dummyData.posts.length}</Text>
      <FlatList data={dummyData.posts} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  kfMGDtnI: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mdRHsjKV: {
    width: 100,
    height: 100
  },
  NdlUhTde: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});