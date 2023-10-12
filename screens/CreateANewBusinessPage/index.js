import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

const BusinessScreen = () => {
  const [title, setTitle] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState('');
  const [contact, setContact] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [socialLink, setSocialLink] = useState('');
  return <SafeAreaView style={_styles.GbyZoyWm}>
      <ScrollView style={_styles.EeFLbcpJ}>
        <Text>Title</Text>
        <TextInput value={title} onChangeText={setTitle} style={_styles.mTaQUqao} />

        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.rwZPjQLM} />

        <Text>Business Name</Text>
        <TextInput value={businessName} onChangeText={setBusinessName} style={_styles.CKNgNEcT} />

        <Text>Business Tagline</Text>
        <TextInput value={tagline} onChangeText={setTagline} style={_styles.BoDhlKyH} />

        <Text>Business Description</Text>
        <TextInput value={description} onChangeText={setDescription} style={_styles.NqpqMbHE} />

        <Text>Additional Links</Text>
        <TextInput value={links} onChangeText={setLinks} style={_styles.CuyCuKUE} />

        <Text>Contact Information</Text>
        <TextInput value={contact} onChangeText={setContact} style={_styles.dOERwpIt} />

        <Text>Business Number</Text>
        <TextInput value={businessNumber} onChangeText={setBusinessNumber} style={_styles.uKDRhLga} />

        <Text>Social Media Links</Text>
        <TextInput value={socialLink} onChangeText={setSocialLink} style={_styles.nEScudIM} />

        <Button title="More" onPress={() => {}} />

        <View style={_styles.SaMRsisi}>
          <Button title="Save" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default BusinessScreen;

const _styles = StyleSheet.create({
  GbyZoyWm: {
    flex: 1,
    backgroundColor: "#fff"
  },
  EeFLbcpJ: {
    padding: 20
  },
  mTaQUqao: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  rwZPjQLM: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  CKNgNEcT: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  BoDhlKyH: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  NqpqMbHE: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  CuyCuKUE: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  dOERwpIt: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  uKDRhLga: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  nEScudIM: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  SaMRsisi: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});