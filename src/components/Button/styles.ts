import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	button: {
		width: width * 0.8,
		height: height * 0.06,
		backgroundColor: theme.colors.black,
		borderRadius: 10,
		marginTop: height * 0.02,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontFamily: theme.fonts.Roboto_700,
		fontSize: theme.size.mdl,
		color: theme.colors.secondary,
		textTransform: 'uppercase',
		alignSelf: 'center',
	},
	buttonSecondary: {
		width: width * 0.8,
		height: height * 0.06,
		backgroundColor: theme.colors.secondary,
		borderRadius: 10,
		marginTop: height * 0.02,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonSecondaryText: {
		fontFamily: theme.fonts.Roboto_700,
		fontSize: theme.size.mdl,
		color: theme.colors.black,
		textTransform: 'uppercase',
		alignSelf: 'center',
	},
	buttonTextLoading: {
		fontFamily: theme.fonts.Roboto_700,
		fontSize: theme.size.mdl,
		color: theme.colors.secondary,
		textTransform: 'uppercase',
		marginLeft: width * 0.02,
		alignSelf: 'center',
	},
	buttonTextSecondaryLoading: {
		fontFamily: theme.fonts.Roboto_700,
		fontSize: theme.size.mdl,
		color: theme.colors.black,
		textTransform: 'uppercase',
		marginLeft: width * 0.02,
		alignSelf: 'center',
	},
	buttonSocial: {
		width: width * 0.8,
		height: height * 0.06,
		backgroundColor: theme.colors.backgroundLight,
		borderRadius: 10,
		marginTop: height * 0.02,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: theme.colors.primary,
	},
	buttonSocialText: {
		fontFamily: theme.fonts.Roboto_700,
		fontSize: theme.size.mdl,
		color: theme.colors.black,
		textTransform: 'uppercase',
		alignSelf: 'center',
	},
	googleLogo: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
		marginRight: width * 0.04,
		alignSelf: 'center',
	},
	loading: {
		flexDirection: 'row',
	},
});

export default styles;
