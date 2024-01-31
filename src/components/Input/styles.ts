import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width * 0.8,
		height: height * 0.06,
		backgroundColor: theme.colors.gray[700],
		borderRadius: 10,
		marginBottom: height * 0.03,
	},
	inputContainerOutlined: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width * 0.8,
		height: height * 0.06,
		borderWidth: 1,
		borderColor: theme.colors.gray[500],
		backgroundColor: theme.colors.gray[400],
		borderRadius: 10,
		marginBottom: height * 0.03,
	},
	icon: {
		marginHorizontal: width * 0.02,
	},
	input: {
		flex: 1,
		fontFamily: theme.fonts.Roboto_400,
		fontSize: theme.size.md,
		paddingHorizontal: width * 0.03,
		color: theme.colors.white,
	},
	inputOutlined: {
		flex: 1,
		fontFamily: theme.fonts.Roboto_400,
		fontSize: theme.size.md,
		paddingHorizontal: width * 0.03,
		color: theme.colors.primary,
	},
});

export default styles;
