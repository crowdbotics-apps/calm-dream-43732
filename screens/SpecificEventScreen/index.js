import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    userProfilePicture: 'https://tinyurl.com/42evm3m3',
    userName: 'John Doe',
    userHandle: '@johndoe',
    award: 'Top Contributor',
    timestamp: '2 hours ago',
    eventDetails: {
      eventName: 'Music Concert',
      eventImage: 'https://tinyurl.com/42evm3m3',
      eventPoster: 'https://tinyurl.com/42evm3m3',
      eventDate: '12 Dec 2021',
      eventTime: '7:00 PM',
      eventLocation: 'New York, USA',
      ticketInfo: 'https://ticketlink.com',
      eventDescription: 'Join us for a night of amazing music!',
      upvotes: 120,
      attendees: 200
    },
    relatedEvents: [{
      eventName: 'Art Exhibition',
      eventImage: 'https://tinyurl.com/42evm3m3',
      eventDate: '15 Dec 2021',
      eventTime: '5:00 PM',
      eventLocation: 'Los Angeles, USA',
      eventDescription: 'Experience the best of contemporary art!',
      upvotes: 80
    }]
  };
  return <SafeAreaView style={_styles.kOWIQAek}>
      <ScrollView style={_styles.tWdMJFOO}>
        <View style={_styles.YdSxpvlu}>
          <Image source={{
          uri: dummyData.userProfilePicture
        }} style={_styles.OKZhjJuD} />
          <View style={_styles.biaSuVaT}>
            <Text style={_styles.wPefckel}>{dummyData.userName}</Text>
            <Text style={_styles.pnOulsBY}>{dummyData.userHandle}</Text>
          </View>
        </View>
        <Image source={{
        uri: dummyData.eventDetails.eventImage
      }} style={_styles.pZCGePzB} />
        <Text style={_styles.dUmLwjhf}>{dummyData.eventDetails.eventName}</Text>
        <Text style={_styles.hzoQODBz}>{dummyData.eventDetails.eventDate} at {dummyData.eventDetails.eventTime}</Text>
        <Text>{dummyData.eventDetails.eventDescription}</Text>
        <View style={_styles.ZahyVwxS}>
          <Button title="Attending" onPress={() => {}} />
          <Text>{dummyData.eventDetails.attendees} attending</Text>
        </View>
        <Button title="Add to calendar" onPress={() => {}} />
        <Button title="Share" onPress={() => {}} />
        <Button title="Report" onPress={() => {}} />
        <Text style={_styles.uYckyiKo}>Related Events</Text>
        {dummyData.relatedEvents.map((event, index) => <View key={index} style={_styles.NuQFbnoZ}>
            <Image source={{
          uri: event.eventImage
        }} style={_styles.pCddTPjK} />
            <Text style={_styles.oDYkuFkT}>{event.eventName}</Text>
            <Text style={_styles.oodMplFJ}>{event.eventDate} at {event.eventTime}</Text>
            <Text>{event.eventDescription}</Text>
            <Button title="Learn More" onPress={() => {}} />
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  kOWIQAek: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tWdMJFOO: {
    padding: 20
  },
  YdSxpvlu: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  OKZhjJuD: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  biaSuVaT: {
    marginLeft: 10
  },
  wPefckel: {
    fontSize: 18,
    fontWeight: "bold"
  },
  pnOulsBY: {
    color: "gray"
  },
  pZCGePzB: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  dUmLwjhf: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  hzoQODBz: {
    color: "gray",
    marginBottom: 20
  },
  ZahyVwxS: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  uYckyiKo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  NuQFbnoZ: {
    marginBottom: 20
  },
  pCddTPjK: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  oDYkuFkT: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  oodMplFJ: {
    color: "gray",
    marginBottom: 10
  }
});