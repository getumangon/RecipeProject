import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const MenuItemStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: colors.black,
    borderRadius: 4
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 4
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 4
  },
  rightContainer: {
    flex: 1,
    margin: 8,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleText: {
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
  }
});
export default MenuItemStyles;
