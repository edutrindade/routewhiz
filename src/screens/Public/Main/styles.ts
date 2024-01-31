import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundLight,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: '85%',
		height: '70%',
	},
	buttonRegister: {
		width: '75%',
		height: 50,
		backgroundColor: '#333',
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
});

export default styles;
