import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Keyboard, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Eraser, MapPin } from 'phosphor-react-native';
import Slider from '@react-native-community/slider';
import { useToast } from 'react-native-toast-notifications';
import { ButtonSecondary } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Header } from '../../../components/Header';
import { theme } from '../../../theme';
import { AlertError, AlertInfo } from '../../../components/Alerts';
import styles from './styles';

//const KEY_GPT = process.env.KEY_GPT;

export const Home = () => {
	const navigation = useNavigation();
	const toast = useToast();
	const [destination, setDestination] = useState('');
	const [days, setDays] = useState(3);
	const [travel, setTravel] = useState('');
	const [loading, setLoading] = useState(false);
	const [showEraser, setShowEraser] = useState(false);

	const showEraserAnimated = useRef(new Animated.Value(0)).current;

	const mockResponse = `
Dia 1: Descobrindo o Centro Histórico de Porto Seguro

- Manhã: Café da manhã na Rua Marechal Deodoro, onde há diversas opções de cafeterias e padarias. Visita ao Marco do Descobrimento: conheça o local onde Pedro Álvares Cabral chegou ao Brasil.
- Tarde: Almoço na Passarela do Álcool: experimente pratos típicos da Bahia em um ambiente animado. Passeio pela Passarela do Descobrimento: explore lojas, bares e restaurantes.
- Noite: Jantar em um dos restaurantes locais oferecendo gastronomia regional.

Dia 2: Natureza e Praias Paradisíacas

- Manhã: Café da manhã na Orla Norte: aproveite a vista para o mar. Visita à Reserva Indígena Pataxó da Jaqueira: experiência cultural e contato com a natureza.
- Tarde: Almoço na praia de Coroa Vermelha: saboreie frutos do mar em um ambiente tranquilo. Relaxamento na Praia de Taperapuã: aproveite o sol e as águas cristalinas.
- Noite: Jantar em uma barraca de praia: desfrute da culinária local com os pés na areia.
	
Dia 3: Aventura e Cultura Local

- Manhã: Passeio de escuna até Recife de Fora: mergulhe em águas repletas de vida marinha. Café da manhã a bordo da escuna.
- Tarde: Visita ao Museu de Porto Seguro: mergulhe na história local e cultural. Almoço na Rua do Mucugê: explore restaurantes charmosos e experimente pratos diversificados.
- Noite: Show de Capoeira na Passarela do Descobrimento: aprecie a arte marcial brasileira. Jantar em um restaurante panorâmico: encerre sua viagem com uma vista espetacular.

Nota: As opções de praia e natureza incluem praias dentro de um raio de 30km da cidade. Certifique-se de verificar as condições locais e os horários de funcionamento dos locais mencionados.`;

	const handleGenerateRoute = async () => {
		if (destination === '') {
			toast.show('Você esqueceu de informar o destino 😉', AlertInfo({ position: 'bottom' }));
			return;
		}

		setTravel('');
		setLoading(true);
		Keyboard.dismiss();

		//prettier-ignore
		const prompt = `Crie um roteiro para uma viagem de exatos ${days.toFixed(0)} dias na cidade de ${destination}. Busque por lugares turisticos, lugares mais visitados e recomendados. Seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com nome do local onde ir em cada dia. Caso a cidade seja praiana, ofereça opções recomendadas num raio de 30km, se existirem, e deixe claro isso. Seja criativo e preciso!`;

		setTimeout(() => {
			setTravel(mockResponse);
			setLoading(false);
		}, 2000);
		// await fetch('https://api.openai.com/v1/chat/completions', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${KEY_GPT}`,
		// 	},
		// 	body: JSON.stringify({
		// 		model: 'gpt-3.5-turbo',
		// 		messages: [
		// 			{
		// 				role: 'user',
		// 				content: prompt,
		// 			},
		// 		],
		// 		temperature: 0.2,
		// 		max_tokens: 800,
		// 		top_p: 1,
		// 	}),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log('data', data);
		// 		console.log(data.choices[0].message.content);
		// 		setTravel(data.choices[0].message.content);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 		toast.show('Parece que a sua cota acabou por hoje \u{1F625}', AlertError({ position: 'top' }));
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});
	};

	const handleScroll = (event: any) => {
		const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

		const isEndOfScroll = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;
		setShowEraser(isEndOfScroll);
	};

	useEffect(() => {
		Animated.timing(showEraserAnimated, {
			toValue: showEraser ? 1 : 0,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}, [showEraser]);

	const reset = () => {
		setDestination('');
		setDays(3);
		setTravel('');
		setShowEraser(false);
	};

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.formContainer}>
				<Text style={styles.inputLabel}>Informe o destino:</Text>
				<Input icon={MapPin} placeholder='Nome da cidade' value={destination} onChangeText={setDestination} autoCorrect={true} outlined />

				<Text style={styles.label}>Tempo de estadia:</Text>

				<Slider
					minimumValue={1}
					maximumValue={10}
					step={1}
					value={days}
					minimumTrackTintColor='#009688'
					maximumTrackTintColor='#000000'
					onValueChange={(value) => setDays(value)}
				/>
				<Text>
					{days} {days === 1 ? 'dia' : 'dias'}
				</Text>

				<ButtonSecondary title='Gerar roteiro' onPress={handleGenerateRoute} icon='map' />
			</View>

			<ScrollView
				onScroll={handleScroll}
				contentContainerStyle={{ paddingBottom: showEraser ? 64 : 24 }}
				style={styles.containerScroll}
				showsVerticalScrollIndicator={false}>
				{loading && (
					<View style={styles.content}>
						<Text style={styles.title}>Carregando roteiro...</Text>
						<ActivityIndicator color={theme.colors.primary} size='small' />
					</View>
				)}

				{travel && (
					<View style={styles.content}>
						<Text style={styles.title}>Roteiro da viagem 👇</Text>
						<Text style={{ lineHeight: 24 }}>{travel}</Text>
					</View>
				)}
			</ScrollView>

			<Animated.View style={{ opacity: showEraserAnimated }}>
				<TouchableOpacity onPress={reset} style={styles.eraser}>
					<Eraser size={30} color={theme.colors.secondary} />
				</TouchableOpacity>
			</Animated.View>
		</View>
	);
};
