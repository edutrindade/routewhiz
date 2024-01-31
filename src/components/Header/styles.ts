import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height * 0.08,
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: width * 0.07,
		top: 40,
	},
	logo: {
		width: 150,
		alignSelf: 'center',
	},
});

export default styles;
