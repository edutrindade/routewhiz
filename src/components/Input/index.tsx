import React from 'react';
import { InputProps } from '../../interfaces';
import { View, TextInput } from 'react-native';
import { theme } from '../../theme';

import styles from './styles';

export const Input = ({ icon: Icon, placeholder, outlined = false, ...rest }: InputProps) => {
	const { autoCorrect = false, keyboardType = 'default' } = rest;

	const inputContainer = outlined ? styles.inputContainerOutlined : styles.inputContainer;
	const inputStyled = outlined ? styles.inputOutlined : styles.input;

	return (
		<View style={inputContainer}>
			{Icon && <Icon style={styles.icon} size={30} color={outlined ? theme.colors.gray[700] : theme.colors.gray[500]} />}
			<TextInput
				style={[inputStyled, keyboardType === 'email-address' && { textTransform: 'lowercase' }]}
				placeholder={placeholder}
				autoCorrect={autoCorrect}
				placeholderTextColor={outlined ? theme.colors.gray[700] : theme.colors.gray[400]}
				{...rest}
			/>
		</View>
	);
};
