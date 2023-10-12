import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = [{
    id: 1,
    profilePic: 'https://tinyurl.com/42evm3m3',
    name: 'User 1',
    handle: '@user1',
    award: 'Top Commenter',
    timestamp: '2 hours ago',
    comment: 'This is a comment',
    upvotes: 10,
    replies: ['Reply 1', 'Reply 2']
  } // More dummy data...
  ];
  return <SafeAreaView style={_styles.CuYYUoxz}>
      <ScrollView>
        {dummyData.map(data => <View key={data.id} style={_styles.oFXwevUs}>
            <View style={_styles.cDlQVeym}>
              <Image source={{
            uri: data.profilePic
          }} style={_styles.DJslWzaT} />
              <View style={_styles.oylbAurZ}>
                <Text style={_styles.swEgmGmg}>{data.name}</Text>
                <Text style={_styles.mQOfMzOY}>{data.handle}</Text>
              </View>
            </View>
            <Text style={_styles.VDnErJKD}>{data.comment}</Text>
            <View style={_styles.dlweuTjJ}>
              <TouchableOpacity style={_styles.xZaSCvRx}>
                <Text style={_styles.MAkcpuSu}>Upvote</Text>
                <Text>{data.upvotes}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Reply</Text>
              </TouchableOpacity>
            </View>
            <View style={_styles.ZbtIEAVv}>
              {data.replies.map((reply, index) => <Text key={index} style={_styles.mSVOkweD}>{reply}</Text>)}
            </View>
          </View>)}
      </ScrollView>
      <View style={_styles.NIcElzjB}>
        <TextInput placeholder="Add a new comment" style={_styles.QDWJOSOR} />
        <Button title="Post" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  CuYYUoxz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  oFXwevUs: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  cDlQVeym: {
    flexDirection: "row",
    alignItems: "center"
  },
  DJslWzaT: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  oylbAurZ: {
    marginLeft: 10
  },
  swEgmGmg: {
    fontSize: 16,
    fontWeight: "bold"
  },
  mQOfMzOY: {
    color: "#888"
  },
  VDnErJKD: {
    marginTop: 10
  },
  dlweuTjJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  xZaSCvRx: {
    flexDirection: "row",
    alignItems: "center"
  },
  MAkcpuSu: {
    marginRight: 5
  },
  ZbtIEAVv: {
    marginTop: 10
  },
  mSVOkweD: {
    marginTop: 5
  },
  NIcElzjB: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  QDWJOSOR: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});