import { use, Suspense } from 'react'

const Joke = () => {
	// use turns this function into a suspending function, needs to be
	// wrapped in a Suspense boundary
	const getData = async () => {
		const res = await fetch('https://api.chucknorris.io/jokes/random')
		// return a promise
		return res.json()
	}

	// accepts a promise
	const joke = use(getData())

	// .value will hold the data on the resolved promise
	return <p>{joke.value}</p>
}

// Probably an Error boundary should be used here
export const ExampleUse = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Joke />
		</Suspense>
	)
}
