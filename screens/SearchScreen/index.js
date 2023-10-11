import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    posts: [{
      id: 1,
      userProfilePic: 'https://tinyurl.com/42evm3m3',
      userName: 'John Doe',
      handle: '@johndoe',
      award: 'Gold',
      timestamp: '2021-09-15T10:30:00',
      content: 'This is a sample post',
      votes: 123,
      comments: 45,
      upvoted: false
    } // More posts...
    ],
    trendingKeywords: [{
      keyword: 'React Native',
      votes: 123,
      comments: 45
    } // More keywords...
    ]
  };
  return <SafeAreaView style={_styles.uvtwyups}>
      <View style={_styles.GCohblHO}>
        <TextInput style={_styles.XzcIEmpG} placeholder="Search" />
        <Text style={_styles.MgQHrbCG}>For you</Text>
        <Text style={_styles.DhAZMtkq}>Trending</Text>
        <ScrollView>
          {dummyData.trendingKeywords.map(item => <View key={item.keyword}>
              <Text>{item.keyword}</Text>
              <Text>{item.votes}</Text>
              <Text>{item.comments}</Text>
            </View>)}
        </ScrollView>
        <Text style={_styles.JbHQProH}>Posts</Text>
        <ScrollView>
          {dummyData.posts.map(post => <View key={post.id}>
              <Image source={{
            uri: post.userProfilePic
          }} style={_styles.uUzgYWTI} />
              <Text>{post.userName}</Text>
              <Text>{post.handle}</Text>
              <Text>{post.award}</Text>
              <Text>{post.timestamp}</Text>
              <Text>{post.content}</Text>
              <View>
                <TouchableOpacity onPress={() => {}}>
                  <Text>{post.upvoted ? 'Upvoted' : 'Upvote'}</Text>
                </TouchableOpacity>
                <Text>{post.votes}</Text>
              </View>
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
                <Text>More options</Text>
              </TouchableOpacity>
            </View>)}
        </ScrollView>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  uvtwyups: {
    flex: 1,
    backgroundColor: "#fff"
  },
  GCohblHO: {
    padding: 20
  },
  XzcIEmpG: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  MgQHrbCG: {
    fontSize: 20,
    fontWeight: "bold"
  },
  DhAZMtkq: {
    fontSize: 20,
    fontWeight: "bold"
  },
  JbHQProH: {
    fontSize: 20,
    fontWeight: "bold"
  },
  uUzgYWTI: {
    width: 50,
    height: 50
  }
});