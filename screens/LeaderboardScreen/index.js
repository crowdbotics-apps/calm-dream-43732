import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Picker, FlatList, TouchableOpacity } from 'react-native';
const dummyData = Array.from({
  length: 20
}, (_, i) => ({
  id: i,
  name: `User ${i}`,
  handle: `@user${i}`,
  score: Math.floor(Math.random() * 100),
  upvotes: Math.floor(Math.random() * 100),
  downvotes: Math.floor(Math.random() * 100),
  image: 'https://tinyurl.com/42evm3m3'
}));

const App = () => {
  const [search, setSearch] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [sort, setSort] = React.useState('crowdscore_high');
  const sortedData = React.useMemo(() => {
    let sorted = [...dummyData];

    switch (sort) {
      case 'crowdscore_high':
        sorted.sort((a, b) => b.score - a.score);
        break;

      case 'crowdscore_low':
        sorted.sort((a, b) => a.score - b.score);
        break;

      case 'votes_high':
        sorted.sort((a, b) => b.upvotes - a.upvotes);
        break;

      case 'votes_low':
        sorted.sort((a, b) => a.upvotes - b.upvotes);
        break;
    }

    return sorted;
  }, [sort]);
  return <SafeAreaView style={_styles.XWestUjZ}>
      <TextInput value={search} onChangeText={setSearch} placeholder="Search" style={_styles.dpGlPPKE} />
      <TextInput value={location} onChangeText={setLocation} placeholder="Location" style={_styles.rxUXFwhV} />
      <Picker selectedValue={city} onValueChange={setCity}>
        <Picker.Item label="City 1" value="city1" />
        <Picker.Item label="City 2" value="city2" />
      </Picker>
      <Picker selectedValue={country} onValueChange={setCountry}>
        <Picker.Item label="Country 1" value="country1" />
        <Picker.Item label="Country 2" value="country2" />
      </Picker>
      <Picker selectedValue={sort} onValueChange={setSort}>
        <Picker.Item label="Highest to lowest Crowdscore" value="crowdscore_high" />
        <Picker.Item label="Lowest to highest Crowdscore" value="crowdscore_low" />
        <Picker.Item label="Highest to lowest vote count" value="votes_high" />
        <Picker.Item label="Lowest to highest vote count" value="votes_low" />
      </Picker>
      <FlatList data={sortedData} keyExtractor={item => item.id.toString()} renderItem={({
      item,
      index
    }) => <View style={_styles.ZSZNdfDT}>
            <Text style={_styles.cOaUnnGc}>{index + 1}</Text>
            <Image source={{
        uri: item.image
      }} style={_styles.KTdddLgn} />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.handle}</Text>
              <Text>Crowdscore: {item.score}</Text>
              <Text>Upvotes: {item.upvotes}</Text>
              <Text>Downvotes: {item.downvotes}</Text>
            </View>
            <View style={_styles.rihksMPu}>
              <TouchableOpacity onPress={() => {}}>
                <Text>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Send Friend Request</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>Report User</Text>
              </TouchableOpacity>
            </View>
          </View>} />
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  XWestUjZ: {
    flex: 1,
    padding: 20
  },
  dpGlPPKE: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  rxUXFwhV: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ZSZNdfDT: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  cOaUnnGc: {
    fontSize: 20,
    marginRight: 10
  },
  KTdddLgn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  rihksMPu: {
    marginLeft: "auto"
  }
});