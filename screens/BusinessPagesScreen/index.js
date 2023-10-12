import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, Image, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

const BusinessPage = ({
  title,
  image,
  description,
  members
}) => <TouchableOpacity style={_styles.mKPSjzBU}>
    <Text style={_styles.XSoBsMxs}>{title}</Text>
    <Image source={{
    uri: image
  }} style={_styles.UhxUvsiI} />
    <Text>{description}</Text>
    <Text>{members} Members</Text>
  </TouchableOpacity>;

const BusinessPagesScreen = () => {
  const businessPages = [{
    id: '1',
    title: 'Business Page 1',
    image: 'https://tinyurl.com/42evm3m3',
    description: 'This is business page 1',
    members: 100
  }, {
    id: '2',
    title: 'Business Page 2',
    image: 'https://tinyurl.com/42evm3m3',
    description: 'This is business page 2',
    members: 200
  } // Add more business pages here
  ];
  return <SafeAreaView style={_styles.xOgSFofM}>
      <Text style={_styles.zxxeNRhQ}>List of Business Pages I'm part of or created</Text>
      <TextInput placeholder="Search business pages" style={_styles.EmbcSJGa} />
      <FlatList data={businessPages} keyExtractor={item => item.id} renderItem={({
      item
    }) => <BusinessPage {...item} />} />
      <Button title="Create a new Business page" onPress={() => {}} />
    </SafeAreaView>;
};

export default BusinessPagesScreen;

const _styles = StyleSheet.create({
  mKPSjzBU: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  XSoBsMxs: {
    fontSize: 18,
    fontWeight: "bold"
  },
  UhxUvsiI: {
    width: "100%",
    height: 200
  },
  xOgSFofM: {
    flex: 1,
    padding: 10
  },
  zxxeNRhQ: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  EmbcSJGa: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10
  }
});