import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDataText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white
  }
});
export default styles;
