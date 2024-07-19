import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      navigateTo('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter valid email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZ2s65nuxtHtiQoURDLvUrLzcazk3e_KTow&s' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#C3C3C3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#2B4C5D',
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    marginBottom: 20, // Space between image and the title
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fff',
  },
  input: {
    width: '50%',
    color: '#fff',
    padding: 20,
    marginVertical: 10,
    borderWidth: 6,
    borderColor: '#A1AFBA',
    borderRadius: 7,
   // backgroundColor:
  },
});

export default LoginPage;