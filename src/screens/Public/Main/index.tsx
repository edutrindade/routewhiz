import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Button, ButtonSecondary } from '../../../components/Button';

export const Main = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/img/logo.jpeg')} resizeMode='contain' style={styles.logo} />

			<Button title='Cadastre-se' onPress={() => navigation.navigate('SignUp')} />

			<ButtonSecondary title='Entrar' onPress={() => navigation.navigate('SignIn')} style={styles.button} />
		</View>
	);
};
