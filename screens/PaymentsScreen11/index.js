import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, Picker, TouchableOpacity } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [selectedCard, setSelectedCard] = useState('');
  const [cvv, setCvv] = useState('');
  const cards = ['Card 1', 'Card 2', 'Card 3'];
  return <SafeAreaView style={_styles.dGroPuzi}>
      <View style={_styles.hpClMZMB}>
        <Text style={_styles.BuBMIOMh}>Payment Amount</Text>
        <Text style={_styles.xSChafQp}>Choose a payment option from the dropdown menu</Text>
        <Picker selectedValue={selectedCard} style={_styles.vmTptmgZ} onValueChange={itemValue => setSelectedCard(itemValue)}>
          {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
        </Picker>
        <Text style={_styles.EsyvNjSM}>Card details</Text>
        <View style={_styles.zTkexZTE}>
          <Text style={_styles.pXsNkrbS}>{selectedCard}</Text>
          <TouchableOpacity onPress={() => alert('Remove card')}>
            <Image style={_styles.VgRjyCwV} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
          </TouchableOpacity>
        </View>
        <Text style={_styles.kMRfdhAL}>CVV</Text>
        <TextInput style={_styles.OwhNaJwX} onChangeText={text => setCvv(text)} value={cvv} keyboardType="numeric" secureTextEntry />
        <Button title="Pay" onPress={() => alert('Payment Successful')} />
        <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  dGroPuzi: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  hpClMZMB: {
    padding: 20
  },
  BuBMIOMh: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  xSChafQp: {
    fontSize: 18,
    marginBottom: 10
  },
  vmTptmgZ: {
    height: 50,
    width: "100%"
  },
  EsyvNjSM: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  zTkexZTE: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  pXsNkrbS: {
    fontSize: 16
  },
  VgRjyCwV: {
    width: 30,
    height: 30
  },
  kMRfdhAL: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  OwhNaJwX: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10
  }
});