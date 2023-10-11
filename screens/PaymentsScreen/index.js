import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, Picker, TouchableOpacity } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [selectedCard, setSelectedCard] = useState('');
  const [cvv, setCvv] = useState('');
  const cards = ['Card 1', 'Card 2', 'Card 3'];
  return <SafeAreaView style={_styles.QqglbXHZ}>
      <View style={_styles.iupfesUR}>
        <Text style={_styles.sRRMRtMk}>Payment Amount</Text>
        <Text style={_styles.XZcCdOTK}>Choose a payment option from the dropdown menu</Text>
        <Picker selectedValue={selectedCard} style={_styles.oLzcvHzN} onValueChange={itemValue => setSelectedCard(itemValue)}>
          {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
        </Picker>
        <Text style={_styles.VcFkQRPl}>Select the card</Text>
        <Image style={_styles.SxCZBEvW} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={_styles.CGqALtUr}>Card details</Text>
        <TextInput style={_styles.DPCtEPwj} onChangeText={text => setCvv(text)} value={cvv} placeholder="CVV" />
        <Button title="Pay" onPress={() => alert('Payment Successful')} color="#841584" accessibilityLabel="Make a payment" />
        <TouchableOpacity onPress={() => alert('Card Removed')}>
          <Text style={_styles.auLxSYxg}>Remove card</Text>
        </TouchableOpacity>
        <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} color="#841584" accessibilityLabel="Add a new card" />
        <Button title="Cancel" onPress={() => navigation.goBack()} color="#841584" accessibilityLabel="Cancel the payment" />
      </View>
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  QqglbXHZ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  iupfesUR: {
    padding: 20
  },
  sRRMRtMk: {
    fontSize: 24,
    fontWeight: "bold"
  },
  XZcCdOTK: {
    fontSize: 18,
    marginTop: 20
  },
  oLzcvHzN: {
    height: 50,
    width: "100%",
    marginTop: 20
  },
  VcFkQRPl: {
    fontSize: 18,
    marginTop: 20
  },
  SxCZBEvW: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
  CGqALtUr: {
    fontSize: 18,
    marginTop: 20
  },
  DPCtEPwj: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  auLxSYxg: {
    fontSize: 18,
    marginTop: 20,
    color: "red"
  }
});