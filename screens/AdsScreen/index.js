import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [data, setData] = useState([{
    id: '1',
    title: 'Title 1',
    description: 'Short Description 1',
    link: 'Link 1',
    image: 'https://tinyurl.com/42evm3m3',
    clicks: 10,
    impressions: 100
  } // More dummy data...
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const renderItem = ({
    item
  }) => <View style={_styles.UGLAOFBr}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.link}</Text>
      <Image source={{
      uri: item.image
    }} style={_styles.mZqXwKHA} />
      <Text>Clicks: {item.clicks}</Text>
      <Text>Impressions: {item.impressions}</Text>
      <View style={_styles.LRpQtesT}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>;

  return <SafeAreaView style={_styles.nTgEnnHE}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={_styles.EmAmxIDg}>
        <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={_styles.eHjdneoV} />
        <TextInput placeholder="Short Description" value={description} onChangeText={setDescription} style={_styles.CkBemhZm} />
        <TextInput placeholder="Link" value={link} onChangeText={setLink} style={_styles.qlhPQpZX} />
        <Button title="Upload Image" onPress={() => {}} />
        <Button title="Create" onPress={() => {}} style={_styles.mfaOIoiP} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  UGLAOFBr: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10
  },
  mZqXwKHA: {
    width: 100,
    height: 100
  },
  LRpQtesT: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nTgEnnHE: {
    flex: 1,
    padding: 20
  },
  EmAmxIDg: {
    margin: 10
  },
  eHjdneoV: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10
  },
  CkBemhZm: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  qlhPQpZX: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  mfaOIoiP: {
    marginTop: 10
  }
});