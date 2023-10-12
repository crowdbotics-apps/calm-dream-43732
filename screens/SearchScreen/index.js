import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.VfMbZGNc}>
      <View style={_styles.NXtIoaWf}>
        <TextInput style={_styles.YtMuLnuB} placeholder="Search" />
        <Text style={_styles.VXSPhalo}>Filters</Text>
        <Text style={_styles.YzJxDzfy}>For you</Text>
        <Text style={_styles.waCcUZAi}>Trending</Text>
        <Text style={_styles.YzRNYBAV}>News</Text>
        <Text style={_styles.UYOclUag}>Sports</Text>
      </View>
      <ScrollView>
        <View style={_styles.cgtlQzCm}>
          <Text style={_styles.vsxfjlpB}>Posts</Text>
          <View style={_styles.yKTLBtBt}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.oeigPNuu} />
            <View style={_styles.dEEoIVVj}>
              <Text style={_styles.AkOMpWqS}>User name</Text>
              <Text>@username</Text>
            </View>
          </View>
          <Text style={_styles.ojVfcWFE}>Content</Text>
          <View style={_styles.RVdjizOt}>
            <TouchableOpacity>
              <Text>Upvote</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Bookmark</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>More options</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  VfMbZGNc: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  NXtIoaWf: {
    padding: 20
  },
  YtMuLnuB: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  VXSPhalo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  YzJxDzfy: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  waCcUZAi: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  YzRNYBAV: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  UYOclUag: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  cgtlQzCm: {
    padding: 20
  },
  vsxfjlpB: {
    fontSize: 20,
    fontWeight: "bold"
  },
  yKTLBtBt: {
    flexDirection: "row",
    marginTop: 20
  },
  oeigPNuu: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  dEEoIVVj: {
    marginLeft: 10
  },
  AkOMpWqS: {
    fontSize: 16,
    fontWeight: "bold"
  },
  ojVfcWFE: {
    marginTop: 20
  },
  RVdjizOt: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between"
  }
});