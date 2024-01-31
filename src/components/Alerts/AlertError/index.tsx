import React from 'react';
import { WarningOctagon } from 'phosphor-react-native';
import { theme } from '../../../theme';

interface AlertErrorProps {
	position?: 'top' | 'bottom' | 'center';
	swipe?: boolean;
	animationType?: 'slide-in' | 'zoom-in';
}

export const AlertError = ({ position = 'top', swipe = true, animationType = 'zoom-in' }: AlertErrorProps) => {
	const marginTop = position === 'top' ? 40 : 0;
	const marginBottom = position === 'bottom' ? 40 : 0;

	return {
		type: 'normal',
		placement: position,
		duration: 4000,
		swipeEnabled: swipe,
		style: { marginTop: marginTop, marginBottom: marginBottom },
		normalColor: theme.colors.danger,
		textStyle: { color: '#fff' },
		icon: <WarningOctagon size={24} color='#fff' weight='fill' />,
		animationType: animationType,
	};
};
