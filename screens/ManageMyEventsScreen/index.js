import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const EventScreen = () => {
  const events = [{
    name: 'Event 1',
    image: 'https://tinyurl.com/42evm3m3',
    date: '2022-01-01',
    time: '12:00',
    location: 'Location 1',
    description: 'This is a brief description of Event 1.',
    upvotes: 10,
    attendees: 20
  } // More events here...
  ];
  return <SafeAreaView style={_styles.gHIOUZWJ}>
      <View style={_styles.qbqNFngI}>
        <Text style={_styles.uxtTruDL}>Events I Created</Text>
        {events.map((event, index) => <View key={index} style={_styles.vvNZBqdU}>
            <Text style={_styles.iBYjrexT}>{event.name}</Text>
            <Image source={{
          uri: event.image
        }} style={_styles.xnQpioqn} />
            <Text>{event.date}</Text>
            <Text>{event.time}</Text>
            <Text>{event.location}</Text>
            <Text>{event.description}</Text>
            <View style={_styles.KMXsGVCi}>
              <FontAwesome name="thumbs-up" size={24} color="black" />
              <Text>{event.upvotes}</Text>
              <FontAwesome name="user" size={24} color="black" style={_styles.jfewQfZH} />
              <Text>{event.attendees}</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="share" size={24} color="black" />
            </TouchableOpacity>
            <Button title="Learn More" onPress={() => {}} />
            <TouchableOpacity>
              <FontAwesome name="edit" size={24} color="black" />
            </TouchableOpacity>
            <Button title="Remove" onPress={() => {}} color="red" />
          </View>)}
        <Button title="Add New Event" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default EventScreen;

const _styles = StyleSheet.create({
  gHIOUZWJ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  qbqNFngI: {
    padding: 20
  },
  uxtTruDL: {
    fontSize: 24,
    fontWeight: "bold"
  },
  vvNZBqdU: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  iBYjrexT: {
    fontSize: 18,
    fontWeight: "bold"
  },
  xnQpioqn: {
    width: "100%",
    height: 200
  },
  KMXsGVCi: {
    flexDirection: "row",
    alignItems: "center"
  },
  jfewQfZH: {
    marginLeft: 10
  }
});