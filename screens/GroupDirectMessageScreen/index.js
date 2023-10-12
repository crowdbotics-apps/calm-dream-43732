import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';

const GroupScreen = () => {
  const dummyData = {
    groupName: 'React Native Group',
    groupImage: 'https://tinyurl.com/42evm3m3',
    membersCount: 100,
    conversationHistory: ['Hello', 'Hi', 'How are you?', 'I am fine'],
    userProfileImage: 'https://tinyurl.com/42evm3m3',
    crowdScore: 4.5,
    userName: 'John Doe',
    handle: '@johndoe',
    message: 'This is a sample message',
    upvotes: 10,
    comments: 5
  };
  return <SafeAreaView style={_styles.oOboOGtc}>
      <ScrollView>
        <View style={_styles.amZyGGrv}>
          <Text style={_styles.bQFkkCji}>{dummyData.groupName}</Text>
          <Image source={{
          uri: dummyData.groupImage
        }} style={_styles.lVkZPsQI} />
          <Text style={_styles.gyhteiQI}>{dummyData.membersCount} Members</Text>
          <TouchableOpacity style={_styles.KLBGqcml}>
            <Text style={_styles.XgEUhARW}>Go to Group</Text>
          </TouchableOpacity>
        </View>
        <View style={_styles.ifjsybaK}>
          {dummyData.conversationHistory.map((item, index) => <Text key={index}>{item}</Text>)}
        </View>
        <View style={_styles.IQOAKlJe}>
          <Image source={{
          uri: dummyData.userProfileImage
        }} style={_styles.eHkvCVaq} />
          <View style={_styles.zxfBPdAo}>
            <Text style={_styles.LAdyACzu}>{dummyData.userName}</Text>
            <Text style={_styles.kVXKNjQZ}>{dummyData.handle}</Text>
          </View>
        </View>
        <View style={_styles.kXtaeVzo}>
          <Text>{dummyData.message}</Text>
          <View style={_styles.TNmLeZeS}>
            <TouchableOpacity>
              <Text>👍 {dummyData.upvotes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.wiWNAiWo}>
              <Text>💬 {dummyData.comments}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={_styles.NDNfLoit}>
          <TextInput placeholder="Write a message" style={_styles.grOXdyzC} />
          <View style={_styles.jveOEEWv}>
            <TouchableOpacity>
              <Text>😀</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.FiTJtNmK}>
              <Text>📷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.tXlbrelU}>
              <Text>📎</Text>
            </TouchableOpacity>
          </View>
          <Button title="Add Post" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  oOboOGtc: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  amZyGGrv: {
    alignItems: "center",
    padding: 20
  },
  bQFkkCji: {
    fontSize: 24,
    fontWeight: "bold"
  },
  lVkZPsQI: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  gyhteiQI: {
    fontSize: 18
  },
  KLBGqcml: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5
  },
  XgEUhARW: {
    color: "#fff"
  },
  ifjsybaK: {
    padding: 20
  },
  IQOAKlJe: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  eHkvCVaq: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  zxfBPdAo: {
    marginLeft: 10
  },
  LAdyACzu: {
    fontSize: 18,
    fontWeight: "bold"
  },
  kVXKNjQZ: {
    fontSize: 16,
    color: "#888"
  },
  kXtaeVzo: {
    padding: 20
  },
  TNmLeZeS: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  wiWNAiWo: {
    marginLeft: 10
  },
  NDNfLoit: {
    padding: 20
  },
  grOXdyzC: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5
  },
  jveOEEWv: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  FiTJtNmK: {
    marginLeft: 10
  },
  tXlbrelU: {
    marginLeft: 10
  }
});