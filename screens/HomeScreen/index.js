import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const ScreenComponent = () => {
  const dummyData = [{
    id: '1',
    userName: 'User1',
    handle: '@user1',
    award: 'Award1',
    timestamp: '1 hour ago',
    content: 'This is a post',
    upvotes: 10
  } // Add more dummy data as needed
  ];
  return <SafeAreaView style={_styles.TRjYsGId}>
      <View style={_styles.gAgWoBfS}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ZsYAxUPp} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.TYZFEQek} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.MycLJaSl} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ppQQFjMV} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.OGJFvOwK} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ESzWTbmK} />
      </View>
      <TextInput placeholder="What's Happening" />
      <Button title="Create a post" onPress={() => {}} />
      <FlatList data={dummyData} renderItem={({
      item
    }) => <View style={_styles.vUNCFUwl}>
            <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.kSFasbxM} />
            <Text>{item.userName}</Text>
            <Text>{item.handle}</Text>
            <Text>{item.award}</Text>
            <Text>{item.timestamp}</Text>
            <Text>{item.content}</Text>
            <View style={_styles.HDNuSdtY}>
              <TouchableOpacity>
                <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.lZolSqtH} />
                <Text>{item.upvotes}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.AeqdveMk} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.lzHSVayT} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.fSVYtCJH} />
              </TouchableOpacity>
            </View>
          </View>} keyExtractor={item => item.id} />
      <TouchableOpacity style={_styles.taYgUgUZ}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.FmqdOkAN} />
      </TouchableOpacity>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  TRjYsGId: {
    flex: 1
  },
  gAgWoBfS: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  ZsYAxUPp: {
    width: 30,
    height: 30
  },
  TYZFEQek: {
    width: 30,
    height: 30
  },
  MycLJaSl: {
    width: 30,
    height: 30
  },
  ppQQFjMV: {
    width: 30,
    height: 30
  },
  OGJFvOwK: {
    width: 30,
    height: 30
  },
  ESzWTbmK: {
    width: 30,
    height: 30
  },
  vUNCFUwl: {
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  kSFasbxM: {
    width: 50,
    height: 50
  },
  HDNuSdtY: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lZolSqtH: {
    width: 30,
    height: 30
  },
  AeqdveMk: {
    width: 30,
    height: 30
  },
  lzHSVayT: {
    width: 30,
    height: 30
  },
  fSVYtCJH: {
    width: 30,
    height: 30
  },
  taYgUgUZ: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  FmqdOkAN: {
    width: 50,
    height: 50
  }
});