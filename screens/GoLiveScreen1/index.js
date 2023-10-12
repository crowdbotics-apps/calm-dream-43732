import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = {
  user: {
    name: 'John Doe',
    handle: '@johndoe',
    profilePic: 'https://tinyurl.com/42evm3m3',
    crowdscore: 4.5
  },
  viewers: [{
    name: 'Viewer 1',
    handle: '@viewer1',
    crowdscore: 4.2
  }, {
    name: 'Viewer 2',
    handle: '@viewer2',
    crowdscore: 3.8
  } // More viewers...
  ],
  comments: [{
    user: 'User 1',
    comment: 'Great stream!'
  }, {
    user: 'User 2',
    comment: 'Keep it up!'
  } // More comments...
  ]
};

const StreamScreen = () => {
  return <SafeAreaView style={_styles.VWQVBTHq}>
      <View style={_styles.HXOLhSmB}>
        <Image source={{
        uri: dummyData.user.profilePic
      }} style={_styles.HIhEkouL} />
        <Text style={_styles.nALRzSDa}>{dummyData.user.name}</Text>
        <Text style={_styles.mKjebvdn}>{dummyData.user.handle}</Text>
        <Text style={_styles.kQaxWbpF}>Crowdscore: {dummyData.user.crowdscore}</Text>
        <TextInput placeholder="Stream Title" style={_styles.vrOdOglX} />
        <Button title="Start/Stop Streaming" onPress={() => {}} />
        <Text style={_styles.SjlUOipx}>Live Video Feed</Text>
        <View style={_styles.MmqZLMIV}>
          <TouchableOpacity>
            <Text>On/Off</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Switch Camera</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={_styles.yCwbWZrd}>
          <Text>Mute/Unmute</Text>
        </TouchableOpacity>
        <Text style={_styles.kUszpJzs}>Chat</Text>
        <FlatList data={dummyData.comments} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View>
              <Text>{item.user}</Text>
              <Text>{item.comment}</Text>
            </View>} />
        <TextInput placeholder="Add comment" style={_styles.ggyXgSJW} />
        <Button title="Post" onPress={() => {}} />
        <Text style={_styles.ieZsCNdo}>Viewer List</Text>
        <FlatList data={dummyData.viewers} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View>
              <Text>{item.name}</Text>
              <Text>{item.handle}</Text>
              <Text>Crowdscore: {item.crowdscore}</Text>
              <Button title="Kick" onPress={() => {}} />
            </View>} />
      </View>
    </SafeAreaView>;
};

export default StreamScreen;

const _styles = StyleSheet.create({
  VWQVBTHq: {
    flex: 1,
    backgroundColor: "#fff"
  },
  HXOLhSmB: {
    padding: 20
  },
  HIhEkouL: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  nALRzSDa: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mKjebvdn: {
    fontSize: 18,
    color: "gray"
  },
  kQaxWbpF: {
    fontSize: 18,
    color: "green"
  },
  vrOdOglX: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20
  },
  SjlUOipx: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  MmqZLMIV: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  yCwbWZrd: {
    marginTop: 20
  },
  kUszpJzs: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  ggyXgSJW: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20
  },
  ieZsCNdo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  }
});