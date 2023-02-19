import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const MenuItemStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: colors.black,
    borderRadius: 4,
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  authorWrapper: {
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 4
  },
  authorText: {
    fontSize: 14,
    color: colors.white
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  commentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white
  },
  priceText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.black
  },
  priceContainer: {
    borderRadius: 4,
    backgroundColor: colors.white,
    padding: 4
  },
  rightArrowContainer: {
    justifyContent: 'center'
  },
  rightArrowImageContainer: {
    height: 18,
    width: 18
  },
  rightArrow: {
    width: '100%',
    height: '100%',
    tintColor: colors.white
  },
  rating: {
    backgroundColor: colors.black,
  }
});
export default MenuItemStyles;
