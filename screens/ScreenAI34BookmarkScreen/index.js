import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const data = [{
  id: '1',
  profilePic: 'https://tinyurl.com/42evm3m3',
  userName: 'John Doe',
  handle: '@johndoe',
  award: 'Gold',
  timestamp: '2h ago',
  content: 'This is a sample post',
  upvotes: 123
} // Add more data here
];

const Post = ({
  item
}) => <View style={_styles.lEmFuUHT}>
    <View style={_styles.VIPxTvZa}>
      <Image source={{
      uri: item.profilePic
    }} style={_styles.ypQUSENv} />
      <View style={_styles.sqsqzXbZ}>
        <Text style={_styles.KHfrdZvP}>{item.userName}</Text>
        <Text style={_styles.zXnaeuEI}>{item.handle}</Text>
      </View>
    </View>
    <Text style={_styles.xaFaUvlw}>{item.content}</Text>
    <View style={_styles.WRCXfYyE}>
      <View style={_styles.SlxAzTRb}>
        <TouchableOpacity>
          <Text>Upvote</Text>
        </TouchableOpacity>
        <Text style={_styles.UEmGKnWT}>{item.upvotes}</Text>
      </View>
      <View style={_styles.jhqHuEHb}>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.lZZOFFja}>
          <Text>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.dPcJzOxu}>
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.yWbrZpWK}>
          <Text>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>;

const App = () => <SafeAreaView style={_styles.vqnFXTxx}>
    <FlatList data={data} renderItem={Post} keyExtractor={item => item.id} />
  </SafeAreaView>;

export default App;

const _styles = StyleSheet.create({
  lEmFuUHT: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  VIPxTvZa: {
    flexDirection: "row",
    alignItems: "center"
  },
  ypQUSENv: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  sqsqzXbZ: {
    marginLeft: 10
  },
  KHfrdZvP: {
    fontSize: 18
  },
  zXnaeuEI: {
    color: "#888"
  },
  xaFaUvlw: {
    marginTop: 10
  },
  WRCXfYyE: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  SlxAzTRb: {
    flexDirection: "row",
    alignItems: "center"
  },
  UEmGKnWT: {
    marginLeft: 5
  },
  jhqHuEHb: {
    flexDirection: "row"
  },
  lZZOFFja: {
    marginLeft: 10
  },
  dPcJzOxu: {
    marginLeft: 10
  },
  yWbrZpWK: {
    marginLeft: 10
  },
  vqnFXTxx: {
    flex: 1
  }
});