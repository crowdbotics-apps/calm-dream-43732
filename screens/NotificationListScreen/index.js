import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const notifications = [{
  id: '1',
  title: 'Notification 1',
  summary: 'Summary of notification 1',
  read: false
}, {
  id: '2',
  title: 'Notification 2',
  summary: 'Summary of notification 2',
  read: false
}, {
  id: '3',
  title: 'Notification 3',
  summary: 'Summary of notification 3',
  read: true
} // Add more notifications as needed
];

const NotificationScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
        {!item.read && <Text style={styles.unread}>Unread</Text>}
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  summary: {
    fontSize: 14,
    color: '#757575',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#1976D2',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  unread: {
    color: '#D32F2F',
    marginTop: 10
  }
});
export default NotificationScreen;