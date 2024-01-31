import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundLight,
		alignItems: 'center',
		justifyContent: 'center',
	},
	formContainer: {
		marginVertical: 16,
		marginTop: 120,
	},
	label: {
		fontSize: 18,
		marginBottom: 8,
	},
	slider: {
		width: '100%',
		marginBottom: 16,
	},
	inputLabel: {
		fontSize: 18,
		marginBottom: 8,
	},
	title: {
		color: theme.colors.black,
		fontSize: theme.size.mdl,
		fontFamily: theme.fonts.Oswald_400,
		textAlign: 'center',
		marginBottom: 16,
	},
	content: {
		backgroundColor: '#FFF',
		padding: 16,
		width: '100%',
		marginTop: 16,
		borderRadius: 8,
	},
	containerScroll: {
		flex: 1,
		width: '80%',
		marginTop: 8,
		marginBottom: 32,
	},
	eraser: {
		position: 'absolute',
		bottom: 24,
		alignSelf: 'center',
	},
});

export default styles;
