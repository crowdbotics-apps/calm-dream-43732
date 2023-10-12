import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const bankAccounts = [{
  id: '1',
  name: 'Bank Account 1',
  number: '1234567890'
}, {
  id: '2',
  name: 'Bank Account 2',
  number: '0987654321'
} // Add more bank accounts as needed
];

const BankAccountScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={bankAccounts} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.number}</Text>
            <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          </View>} />
      <Button title="Add new bank account" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '90%'
  },
  itemText: {
    fontSize: 16
  },
  icon: {
    width: 20,
    height: 20
  }
});
export default BankAccountScreen;