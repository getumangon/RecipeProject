import { StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../config/colors';

const DishDetailsStyles = StyleSheet.create({
  wrapper: {
  },
  scrollWrapper: {
    paddingBottom: 200
  },
  imageContainer: {
    height: 300,
    width: '100%'
  },
  bgImg: {
    height: '100%',
    width: '100%'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    margin: 8
  },
  descText: {
    fontSize: 16,
    color: colors.white,
    margin: 8
  },
  commentWrapper: {
    margin: 5,
    borderWidth: 1,
    borderColor: colors.white
  },
  btnWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    margin: 5
  },
});
export default DishDetailsStyles;
