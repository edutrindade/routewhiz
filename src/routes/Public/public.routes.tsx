import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from '../../screens/Public/Main';
import { SignIn } from '../../screens/Public/SignIn';
import { SignUp } from '../../screens/Public/SignUp';

export type RootStackParamList = {
	Main: undefined;
	SignIn: undefined;
	SignUp: undefined;
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

const PublicRoutes = () => {
	const { Navigator, Screen } = createNativeStackNavigator();

	return (
		<Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
			<Screen name='Main' component={Main} />
			<Screen name='SignIn' component={SignIn} />
			<Screen name='SignUp' component={SignUp} />
		</Navigator>
	);
};

export default PublicRoutes;
