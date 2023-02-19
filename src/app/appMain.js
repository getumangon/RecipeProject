import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from '../routes';

const RecipeApp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Routes />
    </SafeAreaView>
  );
};
export default RecipeApp;
