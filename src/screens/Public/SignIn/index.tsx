import { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EnvelopeSimple, LockKey, User } from 'phosphor-react-native';
import styles from './styles';
import { Button, ButtonSecondary, SocialButton } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useAuth } from '../../../contexts/authContext';

export const SignIn = () => {
	const navigation = useNavigation();
	const { setAuthenticated } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={styles.container}
			resetScrollToCoords={{ x: 0, y: 0 }}
			scrollEnabled={false}
			extraHeight={100}>
			<Image source={require('../../../assets/img/logo.jpeg')} resizeMode='contain' style={styles.logo} />

			<Input
				icon={EnvelopeSimple}
				placeholder='E-mail'
				value={email}
				onChangeText={setEmail}
				keyboardType='email-address'
				autoCorrect={false}
			/>

			<Input icon={LockKey} placeholder='Senha' value={password} onChangeText={setPassword} secureTextEntry autoCorrect={false} />

			<ButtonSecondary title='Entrar' onPress={() => setAuthenticated(true)} style={styles.button} />

			<SocialButton title='Entrar com Google' onPress={() => setAuthenticated(true)} style={styles.button} />

			<TouchableOpacity onPress={() => navigation.navigate('Main')}>
				<Text style={styles.registerText}>Primeira vez por aqui? Cadastre-se.</Text>
			</TouchableOpacity>
		</KeyboardAwareScrollView>
	);
};
