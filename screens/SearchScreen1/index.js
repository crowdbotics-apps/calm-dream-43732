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
      timestamp: '2h ago',
      content: 'This is a sample post',
      votes: 123,
      comments: 45,
      images: ['https://tinyurl.com/42evm3m3']
    } // More posts...
    ],
    trendingKeywords: [{
      keyword: 'React Native',
      votes: 123,
      comments: 45
    } // More keywords...
    ]
  };
  return <SafeAreaView style={_styles.gIOiXoYd}>
      <View style={_styles.mnYqHOmd}>
        <TextInput style={_styles.HrQMxLWR} placeholder="Search" />
        <Text style={_styles.TZHZJUzY}>For you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummyData.trendingKeywords.map(item => <View key={item.keyword} style={_styles.RmtRVQqq}>
              <Text>{item.keyword}</Text>
              <Text>{item.votes} votes</Text>
              <Text>{item.comments} comments</Text>
            </View>)}
        </ScrollView>
        {dummyData.posts.map(post => <View key={post.id} style={_styles.DnwIhWcd}>
            <View style={_styles.oEKfbVvN}>
              <Image source={{
            uri: post.userProfilePic
          }} style={_styles.MLHmJIzS} />
              <View style={_styles.qQduEsMI}>
                <Text>{post.userName}</Text>
                <Text>{post.handle}</Text>
                <Text>{post.award}</Text>
                <Text>{post.timestamp}</Text>
              </View>
            </View>
            <Text>{post.content}</Text>
            {post.images.map((image, index) => <Image key={index} source={{
          uri: image
        }} style={_styles.JentnxGs} />)}
            <View style={_styles.WLRlfwmi}>
              <TouchableOpacity>
                <Text>Upvote ({post.votes})</Text>
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
                <Text>More</Text>
              </TouchableOpacity>
            </View>
          </View>)}
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  gIOiXoYd: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mnYqHOmd: {
    padding: 20
  },
  HrQMxLWR: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  TZHZJUzY: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  RmtRVQqq: {
    marginRight: 20
  },
  DnwIhWcd: {
    marginTop: 20
  },
  oEKfbVvN: {
    flexDirection: "row",
    alignItems: "center"
  },
  MLHmJIzS: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  qQduEsMI: {
    marginLeft: 10
  },
  JentnxGs: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  WLRlfwmi: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});