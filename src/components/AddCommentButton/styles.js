import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    padding: 4
  },
  addDataText: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black
  }
});
export default styles;
