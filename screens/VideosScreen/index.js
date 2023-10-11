import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const dummyData = [{
    id: '1',
    profilePic: 'https://tinyurl.com/42evm3m3',
    name: 'User1',
    handle: '@user1',
    crowdScore: '4.5',
    awards: '3',
    timestamp: '2 hours ago',
    description: 'This is a description',
    category: 'Entertainment',
    upvotes: '100',
    downvotes: '10'
  } // More dummy data...
  ];
  return <SafeAreaView style={_styles.VtMiutda}>
      <TextInput placeholder="Search" style={_styles.vEpUYxjb} />
      <Button title="Go Live" onPress={() => {}} />
      <Button title="Upload Video" onPress={() => {}} />
      <TextInput placeholder="Description" style={_styles.KyOYtEBd} />
      <Button title="Upload a pre-recorded video" onPress={() => {}} />
      <Button title="Upload" onPress={() => {}} />

      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.JQTnKXLf}>
            <Image source={{
        uri: item.profilePic
      }} style={_styles.VXdPWTyA} />
            <View style={_styles.rDmpQulf}>
              <Text>{item.name} ({item.handle})</Text>
              <Text>Crowdscore: {item.crowdScore}</Text>
              <Text>Awards: {item.awards}</Text>
              <Text>Posted: {item.timestamp}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Upvotes: {item.upvotes}</Text>
              <Text>Downvotes: {item.downvotes}</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Bookmark</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>More options</Text>
              </TouchableOpacity>
            </View>
          </View>} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  VtMiutda: {
    flex: 1,
    padding: 20
  },
  vEpUYxjb: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  KyOYtEBd: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  JQTnKXLf: {
    flexDirection: "row",
    marginVertical: 10
  },
  VXdPWTyA: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  rDmpQulf: {
    marginLeft: 10
  }
});