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
		<button
			onClick={toggleTheme}
			className='border border-1 border-black px-2 py-1'>
			{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
		</button>
	)
}

export const ExampleContext = () => {
	return (
		<div className='border-2 border-grey-200 p-2'>
			<ThemeProvider>
				<div className='my-4'>
					<Sample />
					<Card />
				</div>
			</ThemeProvider>
		</div>
	)
}

const Sample = () => {
	const { theme } = use(ThemeContext)

	const style = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white'

	return (
		<div className={'my-4'}>
			<h1 className='text-2xl'>Context with use()</h1>
			<div className={'my-4 p-4 ' + style}>
				<p>example</p>
			</div>
		</div>
	)
}
