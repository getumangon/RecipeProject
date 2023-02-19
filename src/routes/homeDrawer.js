import * as React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactUs from '../pages/ContactUs/ContactUs';
import AboutUs from '../pages/AboutUs/AboutUs';
import { colors } from '../config/colors';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: colors.black,
        width: 260,
      },
      drawerActiveTintColor: colors.black,
      drawerActiveBackgroundColor: colors.white,
      drawerInactiveTintColor: colors.white,
      sceneContainerStyle: {
        backgroundColor: colors.dark_grey,
      },
      headerStyle: {
        height: 56,
        backgroundColor: colors.black
      },
      headerTintColor: colors.white
    }}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
}

