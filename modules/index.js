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
  }) => <TouchableOpacity style={_styles.myxcJScq} onPress={() => alert('Go to Specific Group Screen')}>
      <Image source={{
      uri: item.image
    }} style={_styles.IICNjTPf} />
      <View style={_styles.TRDGbkzd}>
        <Text style={_styles.ZUldnsBZ}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Button title="Join" onPress={() => alert('Join the group')} />
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.TjLMtACg}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.nEmPIEkS} />
      <Text style={_styles.vGjFeKbq}>List of groups I'm part of</Text>
      <Button title="Add a new group" onPress={() => alert('Add a new group')} />
      <TextInput placeholder="Search" style={_styles.vgYBrWJy} />
      <Text style={_styles.WQqJFMPS}>Filter</Text>
      <Text>Trending</Text>
      <Text>Mutual friends</Text>
      <Text>Most members</Text>
      <Text>New</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  myxcJScq: {
    flexDirection: "row",
    margin: 10
  },
  IICNjTPf: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  TRDGbkzd: {
    marginLeft: 10
  },
  ZUldnsBZ: {
    fontSize: 18,
    fontWeight: "bold"
  },
  TjLMtACg: {
    flex: 1,
    padding: 10
  },
  nEmPIEkS: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  vGjFeKbq: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10
  },
  vgYBrWJy: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 5
  },
  WQqJFMPS: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10
  }
});