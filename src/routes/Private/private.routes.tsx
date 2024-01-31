import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../../screens/Private/Welcome';
import { Home } from '../../screens/Private/Home';

export type RootStackParamList = {
	Welcome: undefined;
	Home: undefined;
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

const PrivateRoutes = () => {
	const { Navigator, Screen } = createNativeStackNavigator();

	return (
		<Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Home' component={Home} />
		</Navigator>
	);
};

export default PrivateRoutes;
