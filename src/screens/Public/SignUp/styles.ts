import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundLight,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: '55%',
		height: '30%',
	},
	buttonRegister: {
		width: '75%',
		height: 50,
		backgroundColor: theme.colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginBottom: 20,
	},
	buttonTxtRegister: {
		color: theme.colors.secondary,
		fontSize: 18,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	button: {
		width: '75%',
		height: 50,
		backgroundColor: theme.colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginBottom: 80,
	},
	buttonTxt: {
		color: '#333',
		fontSize: 18,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	registerText: {
		fontFamily: theme.fonts.Roboto_300,
		fontSize: theme.size.md,
		color: theme.colors.black,
		marginTop: height * 0.03,
	},
});

export default styles;
