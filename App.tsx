import { ToastProvider } from 'react-native-toast-notifications';
import { AuthProvider } from './src/contexts/authContext';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Oswald_300Light, Oswald_400Regular, Oswald_700Bold } from '@expo-google-fonts/oswald';

import { Loading } from './src/components/Loading';

import Routes from './src/routes';

export default function App() {
	const [fontLoaded] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_700Bold, Oswald_300Light, Oswald_400Regular, Oswald_700Bold });

	if (!fontLoaded) {
		return <Loading simple />;
	}

	return (
		<AuthProvider>
			<ToastProvider>
				<StatusBar barStyle='dark-content' translucent={true} backgroundColor='#F5F2E5' />
				<Routes />
			</ToastProvider>
		</AuthProvider>
	);
}
