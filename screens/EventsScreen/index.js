import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  eventName: 'Music Concert',
  eventImage: 'https://tinyurl.com/42evm3m3',
  eventDate: '2022-12-31',
  eventTime: '20:00',
  eventLocation: 'New York',
  eventDescription: 'A great music concert...',
  upvotes: 120
} // More events...
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.haGUIYKN}>
      <TextInput placeholder="Search..." style={_styles.gytwaZaz} />

      <Text style={_styles.zuxHJwRZ}>Event Categories</Text>
      <Text style={_styles.MfxZDdzA}>Music, Sports, Business, etc</Text>

      <Text style={_styles.STXClWET}>Popular Tags</Text>
      <Text style={_styles.tlZCCMVa}>Filter by event</Text>

      <Text style={_styles.gJCJmZZa}>Event Listings</Text>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.tSZxwePk}>
            <Text style={_styles.sjgbbDMv}>{item.eventName}</Text>
            <Image source={{
        uri: item.eventImage
      }} style={_styles.ZlPgEnoK} />
            <Text>{item.eventDate}</Text>
            <Text>{item.eventTime}</Text>
            <Text>{item.eventLocation}</Text>
            <Text>{item.eventDescription}</Text>
            <TouchableOpacity style={_styles.HZydBnQF}>
              <Text>👍 {item.upvotes}</Text>
            </TouchableOpacity>
            <Button title="Learn More" onPress={() => {}} />
          </View>} />

      <Button title="Create an event" onPress={() => {}} style={_styles.ndaYClcQ} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  haGUIYKN: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gytwaZaz: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f2f2f2"
  },
  zuxHJwRZ: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  MfxZDdzA: {
    margin: 10
  },
  STXClWET: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  tlZCCMVa: {
    margin: 10
  },
  gJCJmZZa: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  tSZxwePk: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f2f2f2"
  },
  sjgbbDMv: {
    fontSize: 18,
    fontWeight: "bold"
  },
  ZlPgEnoK: {
    width: "100%",
    height: 200
  },
  HZydBnQF: {
    flexDirection: "row",
    alignItems: "center"
  },
  ndaYClcQ: {
    margin: 10
  }
});