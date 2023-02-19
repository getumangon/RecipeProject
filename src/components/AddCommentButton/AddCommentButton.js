import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function AddCommentButton(props) {
  const { addCommentPress } = props;
  return <TouchableOpacity onPress={addCommentPress} style={styles.wrapper}>
    <Text style={styles.addDataText}>+ Add Comment</Text>
  </TouchableOpacity>;
}
