import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDrawer from './homeDrawer';
import { NavigationContainer } from '@react-navigation/native';
import DishDetails from '../pages/DishDetails/DishDetails';
import { colors } from '../config/colors';

const Stack = createStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        cardStyle: {
          backgroundColor: colors.dark_grey
        },
      }} initialRouteName="HomeDrawer">
        <Stack.Screen options={{ headerShown: false }} name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen options={{
          headerStyle: {
            height: 56,
            backgroundColor: colors.black
          },
          headerTintColor: colors.white,
          headerBackTitleVisible: false,
        }} name="DishDetails" component={DishDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

