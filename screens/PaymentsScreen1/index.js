import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, Picker, TouchableOpacity } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [selectedCard, setSelectedCard] = useState('');
  const [cvv, setCvv] = useState('');
  const cards = ['Card 1', 'Card 2', 'Card 3'];
  return <SafeAreaView style={_styles.SjfeGXuc}>
      <View style={_styles.TEpckFBX}>
        <Text style={_styles.UxjtoMYz}>Payment Amount</Text>
        <Text style={_styles.UriYBNnM}>Choose a payment option from the dropdown menu</Text>
        <Picker selectedValue={selectedCard} style={_styles.kBrPYrvq} onValueChange={itemValue => setSelectedCard(itemValue)}>
          {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
        </Picker>
        <Text style={_styles.TSsCuWba}>Card details</Text>
        <View style={_styles.JsrrGKUh}>
          <Text style={_styles.GvWYvvRW}>{selectedCard}</Text>
          <TouchableOpacity onPress={() => alert('Remove card')}>
            <Image style={_styles.DGgrQIaY} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
          </TouchableOpacity>
        </View>
        <Text style={_styles.xhuopUJl}>CVV</Text>
        <TextInput style={_styles.TgFRZmSp} onChangeText={text => setCvv(text)} value={cvv} keyboardType="numeric" secureTextEntry />
        <Button title="Pay" onPress={() => alert('Payment Successful')} />
        <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  SjfeGXuc: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  TEpckFBX: {
    padding: 20
  },
  UxjtoMYz: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  UriYBNnM: {
    fontSize: 18,
    marginBottom: 10
  },
  kBrPYrvq: {
    height: 50,
    width: "100%"
  },
  TSsCuWba: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  JsrrGKUh: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  GvWYvvRW: {
    fontSize: 16
  },
  DGgrQIaY: {
    width: 30,
    height: 30
  },
  xhuopUJl: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  TgFRZmSp: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10
  }
});