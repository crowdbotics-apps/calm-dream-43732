import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Item 1',
  price: '$100',
  postedBy: 'User 1',
  userProfilePic: 'https://tinyurl.com/42evm3m3',
  crowdScore: '4.5',
  userName: 'User 1',
  handle: '@user1',
  award: 'Best Seller',
  timestamp: '2 hours ago'
} // Add more items as needed
];

const ItemScreen = ({
  item
}) => {
  return <View style={_styles.gOOMjrGd}>
      <Text>{item.title}</Text>
    </View>;
};

const MainScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity onPress={() => <ItemScreen item={item} />}>
      <View style={_styles.QhlWwaMW}>
        <Image source={{
        uri: item.userProfilePic
      }} style={_styles.kPCqGCAF} />
        <View style={_styles.zVZzsCgV}>
          <Text style={_styles.ZHNuPyWx}>{item.title}</Text>
          <Text>{item.price}</Text>
          <Text>Posted by: {item.postedBy}</Text>
          <Text>Crowdscore: {item.crowdScore}</Text>
          <Text>{item.userName}</Text>
          <Text>{item.handle}</Text>
          <Text>{item.award}</Text>
          <Text>{item.timestamp}</Text>
        </View>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.IOooHMVa}>
      <View style={_styles.VjtsGBgb}>
        <TextInput style={_styles.lMSQmAtP} placeholder="Search" />
      </View>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

export default MainScreen;

const _styles = StyleSheet.create({
  gOOMjrGd: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  QhlWwaMW: {
    flexDirection: "row",
    margin: 10
  },
  kPCqGCAF: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  zVZzsCgV: {
    marginLeft: 10
  },
  ZHNuPyWx: {
    fontSize: 18,
    fontWeight: "bold"
  },
  IOooHMVa: {
    flex: 1
  },
  VjtsGBgb: {
    padding: 10
  },
  lMSQmAtP: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});