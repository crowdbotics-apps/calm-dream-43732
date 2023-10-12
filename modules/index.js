import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList } from 'react-native';
const dummyData = [{
  name: 'John Doe',
  score: 85,
  id: '@johndoe',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  name: 'Jane Doe',
  score: 90,
  id: '@janedoe',
  image: 'https://tinyurl.com/42evm3m3'
} // Add more dummy data here
];

const ShareScreen = () => {
  return <SafeAreaView style={_styles.pgciVGcM}>
      <View style={_styles.lNtdobDZ}>
        <Button title="Share As a Post" onPress={() => {}} />
        <Text>To a user as a direct message</Text>
        <TextInput style={_styles.vFoEyvbQ} placeholder="Search" />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.dTFLBgHl}>
              <Image source={{
          uri: item.image
        }} style={_styles.fulMTGDv} />
              <View style={_styles.nWBoKZFq}>
                <Text>{item.name}</Text>
                <Text>Crowdscore: {item.score}</Text>
                <Text>Handle ID: {item.id}</Text>
              </View>
              <Button title="Share" onPress={() => {}} />
            </View>} />
        <Text>List of social sharing options</Text>
        <Text>Shareholic API</Text>
      </View>
    </SafeAreaView>;
};

export default ShareScreen;

const _styles = StyleSheet.create({
  pgciVGcM: {
    flex: 1,
    backgroundColor: "#fff"
  },
  lNtdobDZ: {
    padding: 20
  },
  vFoEyvbQ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  dTFLBgHl: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  fulMTGDv: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nWBoKZFq: {
    marginLeft: 10
  }
});