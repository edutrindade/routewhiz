import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: theme.size.xl,
	},
	slide: {
		flex: 1,
		paddingVertical: 200,
	},
	title: {
		color: theme.colors.black,
		fontSize: theme.size.xl,
		fontFamily: theme.fonts.Roboto_700,
		textAlign: 'center',
	},
	text: {
		paddingHorizontal: 30,
		color: theme.colors.black,
		fontSize: theme.size.md,
		textAlign: 'center',
	},
	dot: {
		backgroundColor: '#59b2ab',
		width: 30,
	},
	access: {
		fontSize: theme.size.md,
		marginTop: 14,
		marginRight: 20,
		color: '#59b2ab',
		fontFamily: theme.fonts.Roboto_700,
	},
});

export default styles;
