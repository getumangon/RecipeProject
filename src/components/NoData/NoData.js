import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function NoData() {
  return <View style={styles.wrapper}>
    <Text style={styles.noDataText}>No comments available</Text>
  </View>;
}
