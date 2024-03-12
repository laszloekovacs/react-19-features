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
			<p>{message}</p>
		</Suspense>
	)
}

export const ExamplePromise = () => {
	// you can store promises in state
	const [messagePromise, setMessagePromise] = useState(null)
	const [show, setShow] = useState(false)

	const download = () => {
		// try passing 'fetchMessage' and 'fetchMessage()'
		setMessagePromise(fetchMessage)
		setShow(true)
	}

	if (show) {
		return <MessageContainer messagePromise={messagePromise} />
	} else {
		return <button onClick={download}>Show Message</button>
	}
}
