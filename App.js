import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
 import GetStartedPage from './components/GetStartedPage';
 import LoginPage from './components/LoginPage';
 import RegisterPage from './components/RegisterPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('GetStarted');

  const renderPage = () => {
    if (currentPage === 'GetStarted') {
      return <GetStartedPage navigateTo={setCurrentPage} />;
    } else if (currentPage === 'Login') {
      return <LoginPage navigateTo={setCurrentPage} />;
    } else if (currentPage === 'Register') {
      return <RegisterPage navigateTo={setCurrentPage} />;
    } else if (currentPage === 'Home') {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Home Screen</Text>
        </View>
      );
    }
    return null;
  };

  return <View style={{ flex: 1 }}>{renderPage()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;



