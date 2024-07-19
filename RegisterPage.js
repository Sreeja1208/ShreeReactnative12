import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const RegisterPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }
    navigateTo('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCLPrWpjD5f-szFQMvZohz6SP5Qvlz94WMQ&s'}} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>REGISTER</Text>
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
        placeholder="Enter the Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister}  color="#C3C3C3"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2B4C5D',
  },
  image: {
    width: 180, // Set the width of the image
    height: 180, // Set the height of the image
    marginBottom: 20, // Space between image and the title
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fff',
  },
  input: {
    width: '40%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 7,
    borderColor: '#ccc',
    borderRadius: 6,
  },
});

export default RegisterPage;