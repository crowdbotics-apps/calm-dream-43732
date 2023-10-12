import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const awardsData = [{
  id: '1',
  type: 'Stars',
  levels: 5
}, {
  id: '2',
  type: 'Medals',
  levels: 5
}, {
  id: '3',
  type: 'Bronze',
  levels: 5
}, {
  id: '4',
  type: 'Silver',
  levels: 5
}, {
  id: '5',
  type: 'Gold',
  levels: 5
}];

const AwardScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={_styles.hYnXQfvG}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.zZPUopUP} />
      <View>
        <Text style={_styles.UUJSDDkp}>{item.type}</Text>
        <Text style={_styles.rHNnFuul}>Levels: {item.levels}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.ujKEoynl}>
      <View style={_styles.peBXEtlz}>
        <Text style={_styles.WvnMJRIC}>Awards</Text>
        <FlatList data={awardsData} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

export default AwardScreen;

const _styles = StyleSheet.create({
  hYnXQfvG: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  zZPUopUP: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  UUJSDDkp: {
    fontSize: 18,
    fontWeight: "bold"
  },
  rHNnFuul: {
    fontSize: 16,
    color: "gray"
  },
  ujKEoynl: {
    flex: 1,
    backgroundColor: "#fff"
  },
  peBXEtlz: {
    padding: 20
  },
  WvnMJRIC: {
    fontSize: 24,
    fontWeight: "bold"
  }
});