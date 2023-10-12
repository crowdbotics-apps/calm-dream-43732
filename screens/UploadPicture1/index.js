import React, { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const App = () => {
  const [image, setImage] = useState(null);

  const getPermissionsAsync = async () => {
    const {
      status
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return <SafeAreaView style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a photo" onPress={takePhoto} />
      {image && <Image source={{
      uri: image
    }} style={styles.MsTVpQHI} />}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  MsTVpQHI: {
    width: 200,
    height: 200
  }
});
export default App;