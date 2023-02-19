import React, { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { Rating, Input } from 'react-native-elements';
import { colors } from '../../config/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function AddCommentModal(props) {
  const { isModalVisible, setIsModalVisible, onSavePress } = props;

  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(3);
  const isSaveDisabled = ((author.trim().length > 0) && (comment.trim().length > 0));

  useEffect(() => {
    return () => {
      setAuthor('');
      setComment('');
      setRating(3);
    }
  }, [])

  return <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    onRequestClose={() => { setIsModalVisible(!isModalVisible) }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Rating
          showRating
          onFinishRating={(val) => setRating(val)}
          style={{ paddingVertical: 10 }}
        />
        <Input
          containerStyle={{ width: 200 }}
          style={{ fontSize: 12, color: colors.white }}
          placeholder='Author'
          onChangeText={(e) => setAuthor(e)}
          value={author}
          errorStyle={{ color: colors.red }}
          errorMessage={author.trim().length == 0 && 'Please add value'}
          leftIcon={
            <Icon
              name='user'
              size={12}
              color='white'
            />
          }
        />
        <Input
          containerStyle={{ width: 200, marginTop: 0 }}
          style={{ fontSize: 12, color: colors.white }}
          placeholder='Comment'
          onChangeText={(e) => setComment(e)}
          value={comment}
          errorStyle={{ color: colors.red }}
          errorMessage={comment.trim().length == 0 && 'Please add value'}
          maxLength={60}
          leftIcon={
            <FontAwesome
              name='comment'
              size={12}
              color='white'
            />
          }
        />
        <Pressable
          disabled={!isSaveDisabled}
          style={[styles.button, styles.buttonSave, { backgroundColor: isSaveDisabled ? colors.save : colors.dark_grey }]}
          onPress={() => {
            const obj = {
              author: author,
              id: Date.now().toString(),
              date: new Date(),
              comment: comment,
              rating: rating
            }
            onSavePress(obj);
            setAuthor('');
            setComment('');
            setRating(3);
            setIsModalVisible(!isModalVisible);
          }}>
          <Text style={styles.textStyle}>Save</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonCancel]}
          onPress={() => {
            setAuthor('');
            setComment('');
            setIsModalVisible(!isModalVisible);
          }}>
          <Text style={styles.textStyle}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  </Modal>;
}
