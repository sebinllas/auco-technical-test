import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ReactNode, createContext } from 'react';
import { Theme } from '@/types/Theme';

type ThemeContextType = [Theme, (theme: Theme) => void];

export const ThemeContext = createContext<ThemeContextType>([
	Theme.Light,
	() => {}
]);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useLocalStorage<Theme>('theme', Theme.Light);
	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};
