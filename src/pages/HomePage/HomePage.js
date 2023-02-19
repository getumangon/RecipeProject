import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './style';
import { menuData } from '../../config/menuData';
import MenuItem from '../../components/MenuItem/MenuItem';

export default function HomePage({ navigation }) {
  return <View style={styles.wrapper} >
    <FlatList
      data={menuData}
      renderItem={({ item, index }) => <MenuItem onPressItem={(e) => navigation.navigate('DishDetails', { details: e })} item={item} index={index} />}
      keyExtractor={item => item.id}
    />
  </View>;
}
