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
} // More data...
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.SClUEcBs}>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.cpaJZtSb}>
            <View style={_styles.IbePosbi}>
              <Image source={{
          uri: item.profilePic
        }} style={_styles.MjwcMTIu} />
              <View style={_styles.SMvBTvXf}>
                <Text style={_styles.uaXLKacN}>{item.name}</Text>
                <Text style={_styles.kUGUlchk}>{item.handle}</Text>
              </View>
            </View>
            <Text style={_styles.VLFZlpAK}>{item.comment}</Text>
            <View style={_styles.JtWCcDuC}>
              <Button title="Upvote" onPress={() => {}} />
              <Button title="Downvote" onPress={() => {}} />
              <Text>{item.upvotes} upvotes</Text>
            </View>
            <Button title="View all previous replies" onPress={() => {}} />
            <TextInput placeholder="Add reply" style={_styles.FBVTIWbf} />
            <Button title="Reply" onPress={() => {}} />
          </View>} />
      <View style={_styles.IZKeAqir}>
        <TextInput placeholder="Add a new comment" style={_styles.hRZIQqgr} />
        <Button title="Post" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  SClUEcBs: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cpaJZtSb: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  IbePosbi: {
    flexDirection: "row",
    alignItems: "center"
  },
  MjwcMTIu: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  SMvBTvXf: {
    marginLeft: 10
  },
  uaXLKacN: {
    fontSize: 16,
    fontWeight: "bold"
  },
  kUGUlchk: {
    color: "#888"
  },
  VLFZlpAK: {
    marginTop: 10
  },
  JtWCcDuC: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  FBVTIWbf: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 10
  },
  IZKeAqir: {
    padding: 10
  },
  hRZIQqgr: {
    borderColor: "#ccc",
    borderWidth: 1
  }
});