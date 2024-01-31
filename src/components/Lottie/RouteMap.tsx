import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { theme } from '../../theme';

interface RouteMaprops {
	width?: number;
	height?: number;
	style?: any;
}

export const RouteMapLottie = ({ width, height, style }: RouteMaprops) => {
	const animation = useRef(null);

	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				loop
				ref={animation}
				style={[
					style,
					{
						width: width || 300,
						height: height || 300,
						backgroundColor: theme.colors.white,
					},
				]}
				source={require('../../assets/animations/route_map.json')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	animationContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
