import { useState, createContext, useContext as use } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

const Card = () => {
	// instead of using `useContext` directly, you can use the `use` function
	const { theme, toggleTheme } = use(ThemeContext)
	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
		</button>
	)
}

export const ExampleContext = () => {
	return (
		<ThemeProvider>
			<Card />
		</ThemeProvider>
	)
}
