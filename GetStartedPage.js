import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GetStartedPage = ({ navigateTo }) => {
  return (
    <ImageBackground 
      source={{ uri:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO MY APP</Text>
        <View style={styles.buttonContainer}>
          <Button title="GET STARTED" onPress={() => navigateTo('Login')} color="#C3C3C3" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="REGISTER" onPress={() => navigateTo('Register')} color="#C3C3C3" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // cover to ensure the image covers the entire background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(252, 228, 236, 0.2)', // semi-transparent background to make text readable
  },
  title: {
    fontSize: 50, // Increased font size
    fontWeight: 'bold',
    color: '#2B3D5B',
    marginVertical: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Adds vertical space between buttons
    width: '40%', // Ensures the buttons have the same width
  },
});

export default GetStartedPage;