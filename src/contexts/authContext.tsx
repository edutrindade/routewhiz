// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);

	return <AuthContext.Provider value={{ authenticated, setAuthenticated }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
