import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const rightImage = require('../../assets/chevron-right.png');

export default function MenuItem(props) {
  const { item, index, onPressItem } = props;

  return <TouchableOpacity onPress={() => onPressItem(item)} style={[styles.wrapper, { marginBottom: 10, marginTop: index == 0 ? 10 : 0 }]}>
    <View style={styles.imageContainer}>
      <Image source={item.img} resizeMode='contain' style={styles.imageStyle} />
    </View>
    <View style={styles.rightContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$ {item.price}</Text>
        </View>
      </View>
      <View style={styles.rightArrowContainer}>
        <View style={styles.rightArrowImageContainer}>
          <Image source={rightImage} resizeMode='contain' style={styles.rightArrow} />
        </View>
      </View>
    </View>
  </TouchableOpacity>;
}
