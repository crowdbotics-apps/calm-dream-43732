import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.xvQihBFb}>
      <View style={_styles.rJcoCqSr}>
        <Image style={_styles.xLFrssiF} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={_styles.ojcJNBvA}>User Name</Text>
        <Text>@username</Text>
        <Text>Crowdscore: 4.5</Text>
        <Text>Award: Best Streamer</Text>
        <Text style={_styles.YDlYfovE}>Stream Title</Text>
        <Image style={_styles.rQlBUcYX} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <View style={_styles.eAcwcHLv}>
          <TouchableOpacity>
            <Text>Upvote (123)</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Downvote</Text>
          </TouchableOpacity>
          <Text>Viewer Count: 1234</Text>
          <TouchableOpacity>
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={_styles.PlDiWGGx}>
          <TouchableOpacity>
            <Text>Play/Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Volume</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Fullscreen</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Quality</Text>
          </TouchableOpacity>
        </View>
        <Text style={_styles.bVoTACOj}>Comments</Text>
        <View style={_styles.bRDdtcUF}>
          <Image style={_styles.ymQPozKw} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text>User Name</Text>
          <Text>@username</Text>
          <Text>Crowdscore: 4.5</Text>
          <Text>Great stream!</Text>
        </View>
        <TextInput style={_styles.zmBXwhcr} placeholder="Add a comment" />
        <Button title="Post" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  xvQihBFb: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rJcoCqSr: {
    padding: 20
  },
  xLFrssiF: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  ojcJNBvA: {
    fontSize: 20,
    fontWeight: "bold"
  },
  YDlYfovE: {
    fontSize: 24,
    fontWeight: "bold"
  },
  rQlBUcYX: {
    width: "100%",
    height: 200
  },
  eAcwcHLv: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  PlDiWGGx: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  bVoTACOj: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  bRDdtcUF: {
    marginTop: 10
  },
  ymQPozKw: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  zmBXwhcr: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  }
});