import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

const ReportScreen = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const reasons = ['Spam', 'Pornography', 'Hatred and bullying', 'Self-harm', 'Violent, gory, and harmful content', 'Child porn', 'Illegal activities (e.g. drug use)', 'Deceptive content', 'Copyright and trademark infringement', 'Other'];

  const handleReport = () => {// Handle report logic here
  };

  const handleCancel = () => {// Handle cancel logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Why are you reporting this?</Text>
      {reasons.map((reason, index) => <TouchableOpacity key={index} style={styles.reason} onPress={() => setSelectedReason(reason)}>
          <Text style={styles.reasonText}>{reason}</Text>
        </TouchableOpacity>)}
      {selectedReason === 'Other' && <TextInput style={styles.input} onChangeText={setOtherReason} value={otherReason} placeholder="Please specify" />}
      <Button title="Report" onPress={handleReport} />
      <Button title="Cancel" onPress={handleCancel} color="red" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  reason: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  reasonText: {
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default ReportScreen;