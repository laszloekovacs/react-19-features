import { use, useState, Suspense } from 'react'

const fetchMessage = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Hello World')
		}, 1000)
	})
}

const MessageContainer = ({ messagePromise }) => {
	// this seems to accept a function that returns a promise too
	const message = use(messagePromise)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<p className='text-orange-500'>{message}</p>
		</Suspense>
	)
}

export const ExamplePromise = () => {
	// you can store promises in state
	const [messagePromise, setMessagePromise] = useState(null)
	const [show, setShow] = useState(false)

	const download = () => {
		// try passing 'fetchMessage' and 'fetchMessage()'
		setMessagePromise(fetchMessage())
		setShow(true)
	}

	return (
		<div className='my-8'>
			<h2 className='text-2xl mb-4'>Promise with use() hook</h2>
			{show ? (
				<MessageContainer messagePromise={messagePromise} />
			) : (
				<button
					className='py-1 px-2 border border-1 border-black'
					onClick={download}>
					Show Message
				</button>
			)}

			<small>
				<pre>{JSON.stringify({ messagePromise, show }, null, 2)}</pre>
			</small>
		</div>
	)
}
