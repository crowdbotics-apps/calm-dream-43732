import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const BusinessPage = () => {
  return <SafeAreaView style={_styles.cnLvDOaw}>
      <ScrollView>
        <View style={_styles.gMRgFmyL}>
          <Text style={_styles.aJtdrkTr}>Title</Text>
          <Image style={_styles.dljHDLxT} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={_styles.YxgUjoBd}>Number of Members: 100</Text>
          <Button title="Go to Member List" onPress={() => {}} />
          <Button title="Join/Leave" onPress={() => {}} />
          <Text style={_styles.dzCRxRYo}>Additional Details</Text>
          <Text>Business Address: 123 Street, City, Country</Text>
          <Text>Page Type: Business</Text>
          <Text>Owner Details: John Doe</Text>
          <Text>Business Email: business@domain.com</Text>
          <Text>Business Name: Business Name</Text>
          <Text>Business Tagline: Business Tagline</Text>
          <Text>Business Description: Business Description</Text>
          <Text>Contact Information: 1234567890</Text>
          <Text>Social Media Links: Facebook, Instagram, Twitter</Text>
          <Text>Operating Hours: 9AM - 5PM</Text>
          <Button title="Report" onPress={() => {}} />
        </View>
        <View style={_styles.SscfVuAz}>
          <Text style={_styles.EuYXSTmy}>Posts</Text>
          <View style={_styles.TlRurzWx}>
            <Text>Post Title</Text>
            <Text>Post Content</Text>
            <View style={_styles.lbWfNidW}>
              <TouchableOpacity onPress={() => {}}>
                <Text>Upvote</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Downvote</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Bookmark</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={_styles.NHMgsWOh}>
          <Text style={_styles.OgLtvPUu}>Create a Post</Text>
          <TextInput style={_styles.mEVHxyoX} placeholder="What's Happening" />
          <TextInput style={_styles.bUdiYqpp} placeholder="Category" />
          <TextInput style={_styles.SqOwqXDK} placeholder="Add new" />
          <Button title="Attach Image/Video" onPress={() => {}} />
          <Button title="Create a Post" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default BusinessPage;

const _styles = StyleSheet.create({
  cnLvDOaw: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  gMRgFmyL: {
    alignItems: "center",
    padding: 20
  },
  aJtdrkTr: {
    fontSize: 24,
    fontWeight: "bold"
  },
  dljHDLxT: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20
  },
  YxgUjoBd: {
    fontSize: 18
  },
  dzCRxRYo: {
    fontSize: 18,
    marginTop: 20
  },
  SscfVuAz: {
    padding: 20
  },
  EuYXSTmy: {
    fontSize: 18,
    fontWeight: "bold"
  },
  TlRurzWx: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10
  },
  lbWfNidW: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  NHMgsWOh: {
    padding: 20
  },
  OgLtvPUu: {
    fontSize: 18,
    fontWeight: "bold"
  },
  mEVHxyoX: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  bUdiYqpp: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  SqOwqXDK: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  }
});