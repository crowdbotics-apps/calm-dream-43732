import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MemberListScreen = () => {
  const members = [{
    name: 'John Doe',
    handle: '@johndoe',
    score: 85,
    award: 'Gold',
    profilePic: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'Jane Doe',
    handle: '@janedoe',
    score: 75,
    award: 'Silver',
    profilePic: 'https://tinyurl.com/42evm3m3'
  } // Add more members as needed
  ];
  return <SafeAreaView style={styles.container}>
      {members.map((member, index) => <View key={index} style={styles.memberCard}>
          <Image source={{
        uri: member.profilePic
      }} style={styles.profilePic} />
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberHandle}>{member.handle}</Text>
            <Text style={styles.memberScore}>Crowdscore: {member.score}</Text>
            <Text style={styles.memberAward}>Award: {member.award}</Text>
          </View>
          <View style={styles.memberActions}>
            <Button title="Remove" onPress={() => {}} />
            <Button title="Make Manager" onPress={() => {}} />
          </View>
        </View>)}
      <Button title="Add New Member" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}} style={styles.shareIcon}>
        <Text>Share</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  memberCard: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  memberInfo: {
    flex: 1,
    marginLeft: 10
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  memberHandle: {
    color: '#888'
  },
  memberScore: {
    marginTop: 5
  },
  memberAward: {
    marginTop: 5
  },
  memberActions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shareIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
});
export default MemberListScreen;