import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  handle: '@johndoe',
  score: 85
}, {
  id: '2',
  name: 'Jane Doe',
  handle: '@janedoe',
  score: 90
} // Add more dummy data here
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.IfVbbQfU}>
      <View style={_styles.xILmknDO}>
        <Button title="Back" onPress={() => {}} />
        <View style={_styles.CQdfJzSv}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.PdcxgXfh} />
          <View style={_styles.rnbnaxGO}>
            <Text style={_styles.OFvGqpIX}>User Name</Text>
            <Text style={_styles.KKqIkVxe}>@handle</Text>
          </View>
          <View style={_styles.AnhnbcyT} />
          <Text style={_styles.ZBwqbeDw}>Crowdscore</Text>
        </View>
        <TextInput style={_styles.uvkjsvqb} placeholder="Search" />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.nNfcIGIm}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.eZQnsgZZ} />
              <View style={_styles.CZdCgGxz}>
                <Text style={_styles.nLrIJuaE}>{item.name}</Text>
                <Text style={_styles.aZKEEsoD}>{item.handle}</Text>
              </View>
              <View style={_styles.EkQhmeha} />
              <Text style={_styles.xscQRiVm}>{item.score}</Text>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  IfVbbQfU: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  xILmknDO: {
    padding: 20
  },
  CQdfJzSv: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  PdcxgXfh: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  rnbnaxGO: {
    marginLeft: 10
  },
  OFvGqpIX: {
    fontSize: 18,
    fontWeight: "bold"
  },
  KKqIkVxe: {
    fontSize: 16,
    color: "#888"
  },
  AnhnbcyT: {
    flex: 1
  },
  ZBwqbeDw: {
    fontSize: 24,
    fontWeight: "bold"
  },
  uvkjsvqb: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10
  },
  nNfcIGIm: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  eZQnsgZZ: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  CZdCgGxz: {
    marginLeft: 10
  },
  nLrIJuaE: {
    fontSize: 18,
    fontWeight: "bold"
  },
  aZKEEsoD: {
    fontSize: 16,
    color: "#888"
  },
  EkQhmeha: {
    flex: 1
  },
  xscQRiVm: {
    fontSize: 24,
    fontWeight: "bold"
  }
});