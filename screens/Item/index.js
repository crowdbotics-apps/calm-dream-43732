import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    title: 'Dummy Title',
    price: '100',
    description: 'This is a dummy description',
    timestamp: 'Just now',
    postedBy: 'Dummy User',
    userProfilePic: 'https://tinyurl.com/42evm3m3',
    crowdScore: '4.5',
    userName: 'Dummy User',
    handle: '@dummyuser',
    award: 'Dummy Award'
  };
  return <SafeAreaView style={_styles.baOITIyp}>
      <ScrollView>
        <View style={_styles.uvmtOEEy}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.XKsmTyfu} />
          <Text style={_styles.taUFpeqB}>{dummyData.title}</Text>
          <Text style={_styles.WQJSqXqP}>{dummyData.price}</Text>
          <Text style={_styles.bPLDjuyh}>{dummyData.description}</Text>
          <Text style={_styles.KgAbDABm}>{dummyData.timestamp}</Text>
          <View style={_styles.XtMFcAmC}>
            <Image source={{
            uri: dummyData.userProfilePic
          }} style={_styles.QDPLstuS} />
            <View style={_styles.URXGJskQ}>
              <Text style={_styles.encuQQFF}>{dummyData.userName}</Text>
              <Text style={_styles.HwqyHiTD}>{dummyData.handle}</Text>
            </View>
          </View>
          <Text style={_styles.gYhDDMSr}>Crowdscore: {dummyData.crowdScore}</Text>
          <Text style={_styles.bMIjLPki}>Award: {dummyData.award}</Text>
          <View style={_styles.DLMLALdg}>
            <Button title="Chat" onPress={() => {}} />
            <Button title="Send Friend Request" onPress={() => {}} />
            <Button title="Report" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  baOITIyp: {
    flex: 1,
    backgroundColor: "#fff"
  },
  uvmtOEEy: {
    alignItems: "center",
    padding: 20
  },
  XKsmTyfu: {
    width: "100%",
    height: 200
  },
  taUFpeqB: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  WQJSqXqP: {
    fontSize: 20,
    color: "#888",
    marginTop: 10
  },
  bPLDjuyh: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  KgAbDABm: {
    fontSize: 14,
    color: "#444",
    marginTop: 10
  },
  XtMFcAmC: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  QDPLstuS: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  URXGJskQ: {
    marginLeft: 10
  },
  encuQQFF: {
    fontSize: 16,
    fontWeight: "bold"
  },
  HwqyHiTD: {
    fontSize: 14,
    color: "#666"
  },
  gYhDDMSr: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  bMIjLPki: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  DLMLALdg: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20
  }
});