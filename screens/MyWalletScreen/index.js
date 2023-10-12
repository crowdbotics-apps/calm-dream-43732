import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';

const WalletScreen = () => {
  const walletBalance = 1000;
  const transactions = [{
    date: '2022-01-01',
    type: 'Deposit',
    amount: 500,
    status: 'Completed'
  }, {
    date: '2022-01-02',
    type: 'Withdrawal',
    amount: 200,
    status: 'Completed'
  }, {
    date: '2022-01-03',
    type: 'Deposit',
    amount: 700,
    status: 'Pending'
  }];
  const invitedUsers = ['User1', 'User2', 'User3'];
  return <SafeAreaView style={_styles.tnbRfrAa}>
      <View style={_styles.xdYqWbdm}>
        <Text style={_styles.WcMHNYaM}>Wallet Balance: {walletBalance}</Text>
        <Text style={_styles.NOhFOTsq}>Transaction History:</Text>
        <FlatList data={transactions} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View style={_styles.vxnJegiP}>
              <Text>{item.date}</Text>
              <Text>{item.type}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.status}</Text>
            </View>} />
        <Button title="Add Money" onPress={() => {}} />
        <Button title="Withdraw Money" onPress={() => {}} style={_styles.gkgHuDXX} />
        <Text style={_styles.cKYFPcdB}>Invited Users:</Text>
        <FlatList data={invitedUsers} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <Text style={_styles.fSaRclps}>{item}</Text>} />
        <View style={_styles.WhUCDEmJ}>
          <Text>Invite Link:</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.rveoAFiS} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.vWhfDHMh} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>;
};

export default WalletScreen;

const _styles = StyleSheet.create({
  tnbRfrAa: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  xdYqWbdm: {
    padding: 20
  },
  WcMHNYaM: {
    fontSize: 24,
    fontWeight: "bold"
  },
  NOhFOTsq: {
    fontSize: 20,
    marginTop: 20
  },
  vxnJegiP: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  gkgHuDXX: {
    marginTop: 10
  },
  cKYFPcdB: {
    fontSize: 20,
    marginTop: 20
  },
  fSaRclps: {
    marginTop: 10
  },
  WhUCDEmJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  rveoAFiS: {
    width: 20,
    height: 20
  },
  vWhfDHMh: {
    width: 20,
    height: 20
  }
});