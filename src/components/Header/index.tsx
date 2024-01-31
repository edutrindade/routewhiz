import { View, Image, TouchableOpacity } from 'react-native';
import { SignOut } from 'phosphor-react-native';
import { theme } from '../../theme';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/authContext';

export const Header = () => {
	const navigation = useNavigation();
	const { setAuthenticated } = useAuth();

	const logout = () => {
		setAuthenticated(false);
	};

	return (
		<View style={styles.container}>
			<View style={{ width: 20 }} />
			<Image source={require('../../assets/img/routewhiz.png')} resizeMode='contain' style={styles.logo} />
			<TouchableOpacity onPress={logout}>
				<SignOut size={30} color={theme.colors.primary} />
			</TouchableOpacity>
		</View>
	);
};
