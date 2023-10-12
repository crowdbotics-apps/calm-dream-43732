import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, Picker, TouchableOpacity } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [selectedValue, setSelectedValue] = useState("visa");
  const [cvv, setCvv] = useState("");
  const cards = ["visa", "mastercard", "amex"];
  return <SafeAreaView style={_styles.cCvcOxfB}>
      <Text style={_styles.CAOXyeOJ}>Payment Amount</Text>
      <Picker selectedValue={selectedValue} style={_styles.yGsVMmzW} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
      </Picker>
      <View style={_styles.jRFEFrbr}>
        <Image style={_styles.hjAqxoRi} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={_styles.fmsIkfAZ}>{selectedValue}</Text>
      </View>
      <TextInput style={_styles.pqiOiWZL} onChangeText={text => setCvv(text)} value={cvv} placeholder="CVV" keyboardType="numeric" />
      <Button title="Pay" onPress={() => alert('Payment Successful')} />
      <TouchableOpacity onPress={() => alert('Card Removed')}>
        <Image style={_styles.OJKDcZMf} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </TouchableOpacity>
      <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
      <Button title="Cancel" color="red" onPress={() => navigation.goBack()} />
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  cCvcOxfB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  CAOXyeOJ: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  yGsVMmzW: {
    height: 50,
    width: 150
  },
  jRFEFrbr: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  hjAqxoRi: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  fmsIkfAZ: {
    fontSize: 18
  },
  pqiOiWZL: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  OJKDcZMf: {
    width: 30,
    height: 30,
    marginTop: 20
  }
});