import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
const data = Array(10).fill({
  title: 'Item Title',
  price: '$100',
  description: 'This is a description of the item.'
});

const Item = ({
  title,
  price,
  description
}) => <View style={_styles.gyzCZddA}>
    <Image source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={_styles.YfqzkfQY} />
    <Text style={_styles.EHzTYVXq}>{title}</Text>
    <Text style={_styles.jpiJMApI}>{price}</Text>
    <Text style={_styles.dLCXFHnD}>{description}</Text>
    <View style={_styles.ecmtgFxd}>
      <TouchableOpacity>
        <Text style={_styles.qsicxhMH}>Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={_styles.utFAwSUE}>Edit</Text>
      </TouchableOpacity>
      <Button title="Mark as sold" onPress={() => {}} />
    </View>
  </View>;

const App = () => {
  return <SafeAreaView style={_styles.hrqpDnGC}>
      <View style={_styles.QroPxIKb}>
        <TextInput placeholder="Search" style={_styles.qONtbiOq} />
        <FlatList data={data} renderItem={({
        item
      }) => <Item title={item.title} price={item.price} description={item.description} />} keyExtractor={(item, index) => index.toString()} />
        <Button title="Add a new item" onPress={() => {}} style={_styles.qhpoOUil} />
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  gyzCZddA: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  YfqzkfQY: {
    width: "100%",
    height: 200
  },
  EHzTYVXq: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  jpiJMApI: {
    fontSize: 16,
    color: "#888",
    marginTop: 5
  },
  dLCXFHnD: {
    fontSize: 14,
    marginTop: 10
  },
  ecmtgFxd: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  qsicxhMH: {
    color: "red"
  },
  utFAwSUE: {
    color: "blue"
  },
  hrqpDnGC: {
    flex: 1,
    backgroundColor: "#fff"
  },
  QroPxIKb: {
    padding: 20
  },
  qONtbiOq: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10
  },
  qhpoOUil: {
    marginTop: 20
  }
});