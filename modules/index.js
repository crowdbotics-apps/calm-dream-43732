import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'User 1',
  score: '85',
  role: 'Manager',
  handle: '@user1'
}, {
  id: '2',
  name: 'User 2',
  score: '90',
  role: 'Moderator',
  handle: '@user2'
} // Add more dummy data here
];

const ScreenComponent = () => {
  const [groupTitle, setGroupTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState('Public');

  const renderItem = ({
    item
  }) => <View style={_styles.TARqltfr}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.JNtpCsLY} />
      <View style={_styles.efAxaUSW}>
        <Text>{item.name}</Text>
        <Text>{item.handle}</Text>
        <Text>{item.role}</Text>
      </View>
      <TouchableOpacity style={_styles.avxkZSkX}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={_styles.mafcPwfN}>
      <TextInput placeholder="Group Title" value={groupTitle} onChangeText={setGroupTitle} style={_styles.zgIVwQKY} />
      <Button title="Upload Profile Image" onPress={() => {}} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={_styles.qHeMjMqI} />
      <Button title="Private" onPress={() => setType('Private')} />
      <Button title="Public" onPress={() => setType('Public')} />
      <Text>Description of both types</Text>
      <Button title="Add User" onPress={() => {}} />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <Button title="Share Invite Link" onPress={() => {}} />
      <Button title="Create Group" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  TARqltfr: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  JNtpCsLY: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  efAxaUSW: {
    marginLeft: 10
  },
  avxkZSkX: {
    marginLeft: "auto"
  },
  mafcPwfN: {
    flex: 1,
    padding: 20
  },
  zgIVwQKY: {
    marginBottom: 20
  },
  qHeMjMqI: {
    marginBottom: 20,
    marginTop: 20
  }
});