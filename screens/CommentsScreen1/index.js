import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  profilePic: 'https://tinyurl.com/42evm3m3',
  name: 'John Doe',
  handle: '@johndoe',
  award: 'Top Commenter',
  timestamp: '2 hours ago',
  comment: 'This is a comment',
  upvotes: 10,
  replies: ['Reply 1', 'Reply 2']
} // Add more data as needed
];

const ScreenComponent = () => {
  const renderItem = ({
    item
  }) => <View style={_styles.LPlxChJU}>
      <View style={_styles.zjVtVCaC}>
        <Image source={{
        uri: item.profilePic
      }} style={_styles.itHboYTo} />
        <View style={_styles.IHthxMoo}>
          <Text style={_styles.JgWXmNyF}>{item.name}</Text>
          <Text style={_styles.IjAYBNga}>{item.handle}</Text>
        </View>
      </View>
      <Text style={_styles.QouWDUbd}>{item.comment}</Text>
      <View style={_styles.MVKCiXes}>
        <Button title="Upvote" onPress={() => {}} />
        <Button title="Downvote" onPress={() => {}} />
        <Text>{item.upvotes} upvotes</Text>
      </View>
      <Button title="View all previous replies" onPress={() => {}} />
      <TextInput placeholder="Add reply" style={_styles.SwOxlJsV} />
      <Button title="Reply" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={_styles.kkKkmtzY}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <TextInput placeholder="Add a new comment" style={_styles.yIehrMDT} />
      <Button title="Post" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  LPlxChJU: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  zjVtVCaC: {
    flexDirection: "row",
    alignItems: "center"
  },
  itHboYTo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  IHthxMoo: {
    marginLeft: 10
  },
  JgWXmNyF: {
    fontSize: 18,
    fontWeight: "bold"
  },
  IjAYBNga: {
    color: "gray"
  },
  QouWDUbd: {
    marginTop: 10
  },
  MVKCiXes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  SwOxlJsV: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10
  },
  kkKkmtzY: {
    flex: 1,
    backgroundColor: "#fff"
  },
  yIehrMDT: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10
  }
});