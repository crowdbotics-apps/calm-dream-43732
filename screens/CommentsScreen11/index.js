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
  }) => <View style={_styles.rFmypJtc}>
      <View style={_styles.IiPbpOMI}>
        <Image source={{
        uri: item.profilePic
      }} style={_styles.dsVxIMKq} />
        <View style={_styles.DbfDMhqt}>
          <Text style={_styles.WBxMpube}>{item.name}</Text>
          <Text style={_styles.jIHNRgbq}>{item.handle}</Text>
        </View>
      </View>
      <Text style={_styles.PJlAhFFs}>{item.comment}</Text>
      <View style={_styles.AZcxTflP}>
        <Button title="Upvote" onPress={() => {}} />
        <Button title="Downvote" onPress={() => {}} />
        <Text>{item.upvotes} upvotes</Text>
      </View>
      <Button title="View all previous replies" onPress={() => {}} />
      <TextInput placeholder="Add reply" style={_styles.OXmEArJR} />
      <Button title="Reply" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={_styles.ToePsxwA}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <TextInput placeholder="Add a new comment" style={_styles.uBubZVer} />
      <Button title="Post" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  rFmypJtc: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  IiPbpOMI: {
    flexDirection: "row",
    alignItems: "center"
  },
  dsVxIMKq: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  DbfDMhqt: {
    marginLeft: 10
  },
  WBxMpube: {
    fontSize: 18,
    fontWeight: "bold"
  },
  jIHNRgbq: {
    color: "gray"
  },
  PJlAhFFs: {
    marginTop: 10
  },
  AZcxTflP: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  OXmEArJR: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10
  },
  ToePsxwA: {
    flex: 1,
    backgroundColor: "#fff"
  },
  uBubZVer: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10
  }
});