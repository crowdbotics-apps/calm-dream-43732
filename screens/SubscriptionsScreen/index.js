import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const SubscriptionScreen = ({
  navigation
}) => {
  const plans = [{
    title: 'Free Plan',
    description: 'Basic offer',
    period: 'Monthly',
    price: 'Free',
    features: ['Feature 1', 'Feature 2']
  }, {
    title: 'Basic Plan',
    description: 'Basic offer',
    period: 'Yearly',
    price: '$10',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  }, {
    title: 'Premium Plan',
    description: 'Premium offer',
    period: 'Yearly',
    price: '$20',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  }, {
    title: 'Custom Plan',
    description: 'Custom offer',
    period: 'Monthly',
    price: 'Custom',
    features: ['Custom Features']
  }];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      {plans.map((plan, index) => <View key={index} style={styles.planContainer}>
          <Text style={styles.title}>{plan.title}</Text>
          <Text style={styles.description}>{plan.description}</Text>
          <Text style={styles.period}>{plan.period}</Text>
          <Text style={styles.price}>{plan.price}</Text>
          <Text style={styles.featuresTitle}>Features:</Text>
          {plan.features.map((feature, index) => <Text key={index} style={styles.feature}>{feature}</Text>)}
          <Button title="Choose Plan" onPress={() => navigation.navigate('Payment')} />
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
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  period: {
    fontSize: 16,
    marginBottom: 10
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  feature: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default SubscriptionScreen;