import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontFamily: theme.fonts.Roboto_400,
    fontSize: theme.size.lg,
    color: theme.colors.white,
    marginTop: height * 0.03,
  },
});

export default styles;
