import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    id: 1,
    text: 'Slide 1 Text',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    text: 'Slide 2 Text',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    text: 'Slide 3 Text',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.carousel}>
        <Image style={styles.image} source={{
        uri: slides[currentSlide].image
      }} />
        <Text style={styles.text}>{slides[currentSlide].text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handlePrev}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carousel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20
  },
  button: {
    padding: 10,
    backgroundColor: '#4B9CD3',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default OnboardingScreen;