import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    fullName: 'John Doe',
    crowdScore: 4.5,
    userName: 'johndoe',
    conversationHistory: ['Hello', 'How are you?', 'I am fine, thank you.']
  };
  return <SafeAreaView style={_styles.nmplWodx}>
      <View style={_styles.gYHAxMAj}>
        <Button title="Back" onPress={() => {}} />
        <Image style={_styles.HlubnTfi} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text>{dummyData.fullName}</Text>
        <Text>{dummyData.crowdScore}</Text>
        <Text>@{dummyData.userName}</Text>
        <Button title="Video Call" onPress={() => {}} />
      </View>
      <ScrollView style={_styles.njnhgihT}>
        {dummyData.conversationHistory.map((message, index) => <Text key={index}>{message}</Text>)}
      </ScrollView>
      <View style={_styles.gCXgAuYD}>
        <TextInput placeholder="Write message" style={_styles.FcdyHOdv} />
        <Button title="Emoji" onPress={() => {}} />
        <Button title="Photo/Video" onPress={() => {}} />
        <Button title="Document" onPress={() => {}} />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  nmplWodx: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  gYHAxMAj: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  HlubnTfi: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  njnhgihT: {
    padding: 10
  },
  gCXgAuYD: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  FcdyHOdv: {
    flex: 1,
    marginRight: 10
  }
});