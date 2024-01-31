import { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EnvelopeSimple, LockKey, User } from 'phosphor-react-native';
import styles from './styles';
import { Button, ButtonSecondary, SocialButton } from '../../../components/Button';
import { Input } from '../../../components/Input';

export const SignUp = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={styles.container}
			resetScrollToCoords={{ x: 0, y: 0 }}
			scrollEnabled={false}
			extraHeight={100}>
			<Image source={require('../../../assets/img/logo.jpeg')} resizeMode='contain' style={styles.logo} />

			<Input icon={User} placeholder='Nome' value={name} onChangeText={setName} autoCorrect={false} />

			<Input
				icon={EnvelopeSimple}
				placeholder='E-mail'
				value={email}
				onChangeText={setEmail}
				keyboardType='email-address'
				autoCorrect={false}
			/>

			<Input icon={LockKey} placeholder='Senha' value={password} onChangeText={setPassword} secureTextEntry autoCorrect={false} />

			<Input
				icon={LockKey}
				placeholder='Confirmar senha'
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry
				autoCorrect={false}
			/>

			<ButtonSecondary title='Cadastrar' onPress={() => {}} style={styles.button} />

			<TouchableOpacity onPress={() => navigation.navigate('Main')}>
				<Text style={styles.registerText}>Já possuo cadastro</Text>
			</TouchableOpacity>
		</KeyboardAwareScrollView>
	);
};
