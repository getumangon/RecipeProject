import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20
  },
  addressText: {
    color: colors.white,
    fontSize: 16
  },
  phoneText: {
    color: colors.save,
    fontSize: 14,
    marginTop: 10
  }
});
export default styles;
