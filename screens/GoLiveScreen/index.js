import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = {
  user: {
    name: 'John Doe',
    handle: '@johndoe',
    profilePic: 'https://tinyurl.com/42evm3m3',
    crowdScore: 4.5
  },
  viewers: [{
    name: 'Viewer 1',
    handle: '@viewer1',
    crowdScore: 4.2
  }, {
    name: 'Viewer 2',
    handle: '@viewer2',
    crowdScore: 3.8
  } // More viewers...
  ],
  comments: [{
    name: 'Commenter 1',
    handle: '@commenter1',
    comment: 'Great stream!'
  }, {
    name: 'Commenter 2',
    handle: '@commenter2',
    comment: 'Keep it up!'
  } // More comments...
  ]
};

const StreamScreen = () => {
  return <SafeAreaView style={_styles.GrvafNJb}>
      <View style={_styles.eqgaUZbL}>
        <Image source={{
        uri: dummyData.user.profilePic
      }} style={_styles.BszxmVIv} />
        <Text style={_styles.pmggqryH}>{dummyData.user.name}</Text>
        <Text style={_styles.wtuVKRzi}>{dummyData.user.handle}</Text>
        <Text style={_styles.YEvhlyvh}>Crowdscore: {dummyData.user.crowdScore}</Text>
        <TextInput placeholder="Stream Title" style={_styles.BEBuNyka} />
        <Button title="Start/Stop Streaming" onPress={() => {}} />
        <Text style={_styles.DFnCYVef}>Viewer Count: {dummyData.viewers.length}</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.hjKpmGtq} />
        <Button title="Switch Camera" onPress={() => {}} />
        <Button title="Mute/Unmute" onPress={() => {}} />
        <TextInput placeholder="Add comment" style={_styles.zFkWBZTR} />
        <Button title="Post" onPress={() => {}} />
        <FlatList data={dummyData.comments} keyExtractor={item => item.handle} renderItem={({
        item
      }) => <View style={_styles.SfJQJNIu}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.IpBLxxXk} />
              <View style={_styles.qmXgANzj}>
                <Text style={_styles.RssaLBaE}>{item.name}</Text>
                <Text style={_styles.fOZwXDzJ}>{item.handle}</Text>
                <Text style={_styles.bnlstrPi}>{item.comment}</Text>
              </View>
            </View>} />
        <FlatList data={dummyData.viewers} keyExtractor={item => item.handle} renderItem={({
        item
      }) => <View style={_styles.fVcTLvFs}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.QWGDylcD} />
              <View style={_styles.IDvjmATf}>
                <Text style={_styles.APYNThiZ}>{item.name}</Text>
                <Text style={_styles.rzCpIKpP}>{item.handle}</Text>
                <Text style={_styles.CbSbAWey}>Crowdscore: {item.crowdScore}</Text>
              </View>
              <TouchableOpacity style={_styles.GTQfVXOs}>
                <Text style={_styles.ADIXgVVb}>Kick</Text>
              </TouchableOpacity>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default StreamScreen;

const _styles = StyleSheet.create({
  GrvafNJb: {
    flex: 1,
    backgroundColor: "#fff"
  },
  eqgaUZbL: {
    padding: 20
  },
  BszxmVIv: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  pmggqryH: {
    fontSize: 24,
    fontWeight: "bold"
  },
  wtuVKRzi: {
    fontSize: 18,
    color: "gray"
  },
  YEvhlyvh: {
    fontSize: 18,
    color: "green"
  },
  BEBuNyka: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20
  },
  DFnCYVef: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  hjKpmGtq: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
  zFkWBZTR: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20
  },
  SfJQJNIu: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  IpBLxxXk: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  qmXgANzj: {
    marginLeft: 10
  },
  RssaLBaE: {
    fontSize: 18,
    fontWeight: "bold"
  },
  fOZwXDzJ: {
    fontSize: 16,
    color: "gray"
  },
  bnlstrPi: {
    fontSize: 16
  },
  fVcTLvFs: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  QWGDylcD: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  IDvjmATf: {
    marginLeft: 10
  },
  APYNThiZ: {
    fontSize: 18,
    fontWeight: "bold"
  },
  rzCpIKpP: {
    fontSize: 16,
    color: "gray"
  },
  CbSbAWey: {
    fontSize: 16,
    color: "green"
  },
  GTQfVXOs: {
    marginLeft: "auto",
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10
  },
  ADIXgVVb: {
    color: "white"
  }
});