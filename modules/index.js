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
  return <SafeAreaView style={_styles.QNrbiAtJ}>
      <ScrollView style={_styles.VYjfvkqO}>
        <Text>Title</Text>
        <TextInput value={title} onChangeText={setTitle} style={_styles.FVROpAAV} />

        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.HWEIvMWD} />

        <Text>Business Name</Text>
        <TextInput value={businessName} onChangeText={setBusinessName} style={_styles.ePJsMbbF} />

        <Text>Business Tagline</Text>
        <TextInput value={tagline} onChangeText={setTagline} style={_styles.TAQOlHVk} />

        <Text>Business Description</Text>
        <TextInput value={description} onChangeText={setDescription} style={_styles.NARvRmsE} />

        <Text>Additional Links</Text>
        <TextInput value={links} onChangeText={setLinks} style={_styles.KFjpHvRG} />

        <Text>Contact Information</Text>
        <TextInput value={contact} onChangeText={setContact} style={_styles.cfREnzPr} />

        <Text>Business Number</Text>
        <TextInput value={businessNumber} onChangeText={setBusinessNumber} style={_styles.bsCfIEAp} />

        <Text>Social Media Links</Text>
        <TextInput value={socialLink} onChangeText={setSocialLink} style={_styles.MfqrxLfY} />

        <Button title="More" onPress={() => {}} />

        <View style={_styles.OvblLjbn}>
          <Button title="Save" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default BusinessScreen;

const _styles = StyleSheet.create({
  QNrbiAtJ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  VYjfvkqO: {
    padding: 20
  },
  FVROpAAV: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  HWEIvMWD: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  ePJsMbbF: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  TAQOlHVk: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  NARvRmsE: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  KFjpHvRG: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  cfREnzPr: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  bsCfIEAp: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  MfqrxLfY: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20
  },
  OvblLjbn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});