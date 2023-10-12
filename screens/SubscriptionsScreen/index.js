import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SubscriptionScreen = ({
  navigation
}) => {
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
      {plans.map((plan, index) => <View key={index} style={styles.card}>
          <Text style={styles.title}>{plan.title}</Text>
          <Text style={styles.period}>{plan.period}</Text>
          <Text style={styles.price}>{plan.price}</Text>
          {plan.features.map((feature, index) => <Text key={index} style={styles.feature}>{feature}</Text>)}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment', {
        plan: plan.title
      })}>
            <Text style={styles.buttonText}>Choose Plan</Text>
          </TouchableOpacity>
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  period: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  feature: {
    fontSize: 14,
    color: '#666'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default SubscriptionScreen;