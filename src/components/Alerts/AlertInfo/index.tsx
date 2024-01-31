import React from 'react';
import { Info } from 'phosphor-react-native';
import { theme } from '../../../theme';

interface AlertInfoProps {
	position?: 'top' | 'bottom' | 'center';
	swipe?: boolean;
	animationType?: 'slide-in' | 'zoom-in';
}

export const AlertInfo = ({ position = 'top', swipe = true, animationType = 'zoom-in' }: AlertInfoProps) => {
	const marginTop = position === 'top' ? 40 : 0;
	const marginBottom = position === 'bottom' ? 40 : 0;

	return {
		type: 'normal',
		placement: position,
		duration: 4000,
		swipeEnabled: swipe,
		style: { marginTop: marginTop, marginBottom: marginBottom },
		normalColor: theme.colors.info,
		textStyle: { color: '#fff' },
		icon: <Info size={24} color='#fff' weight='fill' />,
		animationType: animationType,
	};
};
