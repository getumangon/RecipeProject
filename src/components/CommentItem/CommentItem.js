import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Rating } from 'react-native-elements';
import { colors } from '../../config/colors';
import styles from './styles';


export default function CommentItem(props) {
  const { item, index } = props;
  const dateString = item?.date.getDate() + '/' + item?.date.getMonth() + '/' + item?.date.getFullYear() + "  " + item?.date.getHours() + ':' + + item?.date.getMinutes();

  return <View style={[styles.wrapper, { marginBottom: 10, marginTop: index == 0 ? 10 : 0 }]}>
    <View style={styles.imageContainer}>
      <Text style={styles.commentText}>{item.comment}</Text>
      <Rating
        type='custom'
        imageSize={20}
        readonly
        startingValue={item.rating}
        ratingBackgroundColor={'transparent'}
        style={{ paddingVertical: 5, marginLeft: 0 }}
        ratingColor={colors.rating_orange}
      />
      <View style={styles.authorWrapper}>
        <Text style={styles.authorText}>~ {item.author}</Text>
        <Text style={styles.authorText}> ({dateString})</Text>
      </View>
    </View>
  </View>;
}
