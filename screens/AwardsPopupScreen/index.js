import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const AwardsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const awards = [{
    type: 'Stars',
    levels: 5,
    currentLevel: 3
  }, {
    type: 'Medals',
    levels: 5,
    currentLevel: 2
  }, {
    type: 'Bronze',
    levels: 5,
    currentLevel: 1
  }, {
    type: 'Silver',
    levels: 5,
    currentLevel: 4
  }, {
    type: 'Gold',
    levels: 5,
    currentLevel: 5
  }];
  return <SafeAreaView style={styles.container}>
      {awards.map((award, index) => <View key={index} style={styles.awardContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={styles.trophyImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          </TouchableOpacity>
          <Text style={styles.awardText}>{award.type}</Text>
          <Text style={styles.levelText}>Level: {award.currentLevel}/{award.levels}</Text>
        </View>)}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Trophy Details</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  awardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  trophyImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  awardText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  levelText: {
    fontSize: 16,
    marginLeft: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default AwardsScreen;