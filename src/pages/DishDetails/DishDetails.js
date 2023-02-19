import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import AddCommentButton from '../../components/AddCommentButton/AddCommentButton';
import AddCommentModal from '../../components/AddCommentModal/AddCommentModal';
import CommentItem from '../../components/CommentItem/CommentItem';
import NoData from '../../components/NoData/NoData';
import { postComment } from '../../store/reducers/dishDetails/commentsReducer';
import styles from './style';

export default function DishDetails({ route, navigation }) {
  const { details } = route.params;
  const comments = useSelector((state) => state.comments.commentReducer);
  const dispatch = useDispatch();
  const [commentsLocal, setCommentsLocal] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const filterComments = () => {
    let tempComment = [...comments];
    if (tempComment && tempComment.length > 0) {
      const filtered = tempComment.filter((e) => {
        return e.hasOwnProperty(details.id)
      });
      if (filtered && filtered.length > 0) {
        setCommentsLocal(filtered[0][details.id]);
      }
    }
  }

  useEffect(() => {
    filterComments()
  }, [comments]);

  return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image style={styles.bgImg} source={details.img} resizeMode='cover' />
      </View>
      <View>
        <Text style={styles.titleText}>{details.name}</Text>
        <Text style={styles.descText}>{details.dsc}</Text>
      </View>
      <View style={styles.btnWrapper}>
        <AddCommentButton addCommentPress={() => { setIsModalVisible(true) }} />
      </View>
      <View style={styles.commentWrapper}>
        {commentsLocal.length > 0 ? <View>
          {commentsLocal.map((e, index) => <CommentItem item={e} index={index} />)}
        </View>
          :
          <NoData />
        }
      </View>
    </View>

    {<AddCommentModal onSavePress={(commentObject) => {
      commentObject.detailsId = details.id;
      dispatch(postComment(commentObject));
    }} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />}

  </ ScrollView>
}
