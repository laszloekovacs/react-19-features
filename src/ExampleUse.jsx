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
		<div className='grid gap-2 pb-8'>
			<h1 className='text-2xl'>Fetch with use() hook and Suspense</h1>
			<Suspense fallback={<p className='text-amber-500'>Loading...</p>}>
				<Joke />
			</Suspense>
		</div>
	)
}
