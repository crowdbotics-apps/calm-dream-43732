import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = {
  groupName: 'Group Name',
  groupDescription: 'Group Description',
  totalMembers: 10,
  allowedMembers: 20,
  members: [{
    id: '1',
    name: 'User 1',
    handle: '@user1',
    role: 'Manager',
    profilePicture: 'https://tinyurl.com/42evm3m3',
    crowdScore: 100
  } // More members...
  ]
};

const GroupScreen = () => {
  const renderItem = ({
    item
  }) => <View style={_styles.iyBiHDTt}>
      <Image source={{
      uri: item.profilePicture
    }} style={_styles.jveXxtzC} />
      <Text>{item.name}</Text>
      <Text>{item.handle}</Text>
      <Text>{item.role}</Text>
      <TouchableOpacity>
        <Text>Remove</Text>
      </TouchableOpacity>
      <Button title="Report" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={_styles.nJGkJzCf}>
      <Text style={_styles.hyFHwpZH}>{dummyData.groupName}</Text>
      <Button title="Edit" onPress={() => {}} />
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.PUKgMwgh} />
      <Button title="Upload new" onPress={() => {}} />
      <Text>{dummyData.groupDescription}</Text>
      <Button title="Edit" onPress={() => {}} />
      <Text>Total members: {dummyData.totalMembers}</Text>
      <Text>Allowed members: {dummyData.allowedMembers}</Text>
      <FlatList data={dummyData.members} renderItem={renderItem} keyExtractor={item => item.id} />
      <Button title="Add user" onPress={() => {}} />
      <Button title="Share invite link" onPress={() => {}} />
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  iyBiHDTt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  jveXxtzC: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nJGkJzCf: {
    flex: 1,
    padding: 20
  },
  hyFHwpZH: {
    fontSize: 24,
    fontWeight: "bold"
  },
  PUKgMwgh: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});