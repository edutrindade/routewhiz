import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { theme } from '../../theme';

interface Walkingrops {
	width?: number;
	height?: number;
	style?: any;
}

export const WalkingLottie = ({ width, height, style }: Walkingrops) => {
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
				source={require('../../assets/animations/walking.json')}
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
