import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const plans = [{
    title: 'Free Plan',
    period: 'Monthly',
    price: '0',
    features: ['Feature 1', 'Feature 2']
  }, {
    title: 'Basic Offer',
    period: 'Yearly',
    price: '99',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  }, {
    title: 'Premium Offer',
    period: 'Yearly',
    price: '199',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  }, {
    title: 'Custom Offer',
    period: 'Monthly',
    price: 'Custom',
    features: ['Custom Features']
  }];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      {plans.map((plan, index) => <View key={index} style={styles.planContainer}>
          <Text style={styles.planTitle}>{plan.title}</Text>
          <Text style={styles.planPeriod}>{plan.period}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          {plan.features.map((feature, index) => <Text key={index} style={styles.planFeature}>{feature}</Text>)}
          <Button title="Choose Plan" onPress={() => alert('Redirect to payment')} />
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  planContainer: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  planPeriod: {
    fontSize: 16,
    marginBottom: 10
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  planFeature: {
    fontSize: 14,
    marginBottom: 5
  }
});
export default SubscriptionScreen;