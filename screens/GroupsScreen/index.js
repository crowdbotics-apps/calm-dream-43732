import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

const GroupScreen = () => {
  const dummyData = [{
    id: '1',
    title: 'Group 1',
    description: 'This is group 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Group 2',
    description: 'This is group 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    title: 'Group 3',
    description: 'This is group 3',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const renderItem = ({
    item
  }) => <TouchableOpacity style={_styles.OntkJxrD} onPress={() => alert('Go to Specific Group Screen')}>
      <Image source={{
      uri: item.image
    }} style={_styles.gInNJjuE} />
      <View style={_styles.METyzWPX}>
        <Text style={_styles.avOeTlna}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Button title="Join" onPress={() => alert('Join the group')} />
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.oUnqCyJC}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.QXhvilcf} />
      <Text style={_styles.EukOFUeu}>List of groups I'm part of</Text>
      <Button title="Add a new group" onPress={() => alert('Add a new group')} />
      <TextInput placeholder="Search" style={_styles.WKsquqyr} />
      <Text style={_styles.JsTrgFNO}>Filter</Text>
      <Text>Trending</Text>
      <Text>Mutual friends</Text>
      <Text>Most members</Text>
      <Text>New</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  OntkJxrD: {
    flexDirection: "row",
    margin: 10
  },
  gInNJjuE: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  METyzWPX: {
    marginLeft: 10
  },
  avOeTlna: {
    fontSize: 18,
    fontWeight: "bold"
  },
  oUnqCyJC: {
    flex: 1,
    padding: 10
  },
  QXhvilcf: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  EukOFUeu: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10
  },
  WKsquqyr: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 5
  },
  JsTrgFNO: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10
  }
});