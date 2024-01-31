import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicRoutes from './Public/public.routes';
import PrivateRoutes from './Private/private.routes';
import { useAuth } from '../contexts/authContext';
import { Loading } from '../components/Loading';

const Routes = () => {
	const { Navigator, Screen } = createNativeStackNavigator();
	const { authenticated } = useAuth();

	const [loading, setLoading] = useState(false);

	if (loading) {
		return <Loading />;
	}

	return (
		<NavigationContainer>
			<Navigator>
				{authenticated ? (
					<Screen options={{ headerShown: false }} name='PrivateRoutes' component={PrivateRoutes} />
				) : (
					<Screen options={{ headerShown: false }} name='PublicRoutes' component={PublicRoutes} />
				)}
			</Navigator>
		</NavigationContainer>
	);
};

export default Routes;
