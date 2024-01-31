import React from 'react';
import { TouchableOpacity, View, Text, Image, ActivityIndicator } from 'react-native';
import Google from '../../assets/img/Google.png';
import { Ionicons } from '@expo/vector-icons';

import { ButtonProps } from '../../interfaces';
import { theme } from '../../theme';

import styles from './styles';

export const Button = ({ title, loading = false, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			{loading ? (
				<View style={styles.loading}>
					<ActivityIndicator color={theme.colors.secondary} />
					<Text style={styles.buttonTextLoading}>Carregando</Text>
				</View>
			) : (
				<Text style={styles.buttonText}>{title}</Text>
			)}
		</TouchableOpacity>
	);
};

export const ButtonSecondary = ({ title, loading = false, icon = 'map', onPress }: ButtonProps) => {
	return (
		<TouchableOpacity style={styles.buttonSecondary} onPress={onPress}>
			{loading ? (
				<View style={styles.loading}>
					<ActivityIndicator color={theme.colors.black} />
					<Text style={styles.buttonTextSecondaryLoading}>Carregando</Text>
				</View>
			) : (
				<View style={{ flexDirection: 'row', gap: 8 }}>
					{icon && <Ionicons name={icon} size={24} color='black' />}
					<Text style={styles.buttonSecondaryText}>{title}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

export const SocialButton = ({ title, loading = false, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity style={styles.buttonSocial} onPress={onPress}>
			{loading ? (
				<View style={styles.loading}>
					<ActivityIndicator color={theme.colors.secondary} />
					<Text style={styles.buttonTextLoading}>Carregando</Text>
				</View>
			) : (
				<>
					<Image source={Google} resizeMode='contain' style={styles.googleLogo} />
					<Text style={styles.buttonSocialText}>{title}</Text>
				</>
			)}
		</TouchableOpacity>
	);
};
