import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { WalkingLottie } from '../../../components/Lottie/Travel';
import { EarthLottie } from '../../../components/Lottie/Earth';
import { RouteMapLottie } from '../../../components/Lottie/RouteMap';

import styles from './styles';

export const Welcome = () => {
	const navigation = useNavigation();

	const slides = [
		{
			key: 'one',
			title: 'Bem-vindo ao RouteWhiz',
			text: 'RouteWhiz é um aplicativo que te ajuda a planejar suas viagens de forma fácil e rápida.',
			animation: <WalkingLottie />,
		},
		{
			key: 'two',
			title: 'Como funciona?',
			text: 'Basta você nos dizer para onde quer ir que nós cuidadmos do resto',
			animation: <EarthLottie />,
		},
		{
			key: 'three',
			title: 'Roteiros personalizados',
			text: 'Nós criamos roteiros personalizados para você, de acordo com o seu gosto.',
			animation: <RouteMapLottie />,
		},
	];

	const renderSlides = ({ item }: any) => {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
				{item.animation}
				<Text style={styles.text}>{item.text}</Text>
			</View>
		);
	};

	const renderDoneButton = () => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Text style={styles.access}>Acessar</Text>
			</TouchableOpacity>
		);
	};

	return (
		<AppIntroSlider
			style={{ backgroundColor: '#fff' }}
			renderItem={renderSlides}
			data={slides}
			activeDotStyle={styles.dot}
			renderDoneButton={renderDoneButton}
		/>
	);
};
