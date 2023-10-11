import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native';

const PaymentHistoryScreen = () => {
  const dummyData = [{
    payerName: 'John Doe',
    paymentDateTime: '2021-09-15 10:30',
    amountPaid: 100.00
  }, {
    payerName: 'Jane Doe',
    paymentDateTime: '2021-09-16 11:30',
    amountPaid: 200.00
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {dummyData.map((data, index) => <View key={index} style={styles.card}>
            <Text style={styles.text}>Payer Name: {data.payerName}</Text>
            <Text style={styles.text}>Payment Date/Time: {data.paymentDateTime}</Text>
            <Text style={styles.text}>Amount Paid: ${data.amountPaid}</Text>
            <Button title="Download Receipt" onPress={() => {}} />
          </View>)}
        <Button title="Download Full Report" onPress={() => {}} />
        <View style={styles.datePicker}>
          <TextInput placeholder="From Date" style={styles.dateInput} />
          <TextInput placeholder="To Date" style={styles.dateInput} />
        </View>
        <Button title="Download" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  dateInput: {
    width: '45%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10
  }
});
export default PaymentHistoryScreen;